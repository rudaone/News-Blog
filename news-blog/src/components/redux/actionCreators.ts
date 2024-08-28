import { put, takeEvery } from "redux-saga/effects";
import { IArticle, IArticleInfo, IArticleResponse, } from "../../types";
import { LOAD_ARTICLES, SET_ARTICLES, SET_ARTICLES_LIMIT, SET_CURRENT_PAGE } from "./actionTypes";

const setArticles = (articles: IArticle[]) => ({
    type: SET_ARTICLES,
    articles
})

const loadArticles = (articleInfo: IArticleInfo) => ({
    type: LOAD_ARTICLES,
    articleInfo

})

const setArticlesLimit = (limit: number) => ({
    type: SET_ARTICLES_LIMIT,
    limit
})

const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})


function* fetchLoadArticle(action: any) {
    const { limit, currentPage } = action.articleInfo;

    let url = `https://api.spaceflightnewsapi.net/v4/articles/?form=&format=json&limit=${limit}&offset=${(currentPage - 1)*limit}`
    const resp: Response = yield fetch(url);
    const data: IArticleResponse = yield resp.json();
    console.log(data.results)
    yield put(setArticles(data.results));
    console.log(data.results)

}

function* watcherArticles() {
    yield takeEvery(LOAD_ARTICLES, fetchLoadArticle)
}

export { loadArticles, watcherArticles, setArticles, setArticlesLimit, setCurrentPage }
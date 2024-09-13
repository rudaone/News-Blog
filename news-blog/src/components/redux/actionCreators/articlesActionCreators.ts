import { put, takeEvery } from "redux-saga/effects";
import { IArticle, IArticleInfo, IArticleResponse, ISelectedPage, } from "../../../types";
import { LOAD_ARTICLES, SET_ARTICLES, SET_ARTICLES_LIMIT, SET_CURRENT_PAGE, SET_SELECTED_PAGE, LOAD_SELECTED_PAGE } from "../actionTypes/articlesActionTypes";

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
const loadSelectedPage = (id: string) => ({
    type: LOAD_SELECTED_PAGE,
    id
})

const setSelectedPage = (selectedPage: ISelectedPage) => ({
    type: SET_SELECTED_PAGE,
    selectedPage
})


function* fetchLoadArticle(action: any) {
    const { limit, currentPage, search } = action.articleInfo;
    let url = `https://api.spaceflightnewsapi.net/v4/articles/?form=&format=json&limit=${limit}&offset=${(currentPage - 1) * limit}`
    if (search) {
        url += '&title_contains=' + search
    }
    const resp: Response = yield fetch(url);
    const data: IArticleResponse = yield resp.json();
    yield put(setArticles(data.results));
}

function* fetchSelectedPage(action: any) {
    const resp: Response = yield fetch(`https://api.spaceflightnewsapi.net/v4/articles/${action.id}`)
    const selectedPage: IArticle = yield resp.json();
    yield put(setSelectedPage(selectedPage));
    console.log(selectedPage)
}

function* watcherArticles() {
    yield takeEvery(LOAD_ARTICLES, fetchLoadArticle)
    yield takeEvery(LOAD_SELECTED_PAGE, fetchSelectedPage)
}

export { loadArticles, watcherArticles, setArticles, setArticlesLimit, setCurrentPage, loadSelectedPage, setSelectedPage }
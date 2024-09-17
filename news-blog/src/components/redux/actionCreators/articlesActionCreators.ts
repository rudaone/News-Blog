import { put, takeEvery } from "redux-saga/effects";
import { IArticle, IArticleInfo, IArticleResponse} from "../../../types";
import { LOAD_ARTICLES, SET_ARTICLES, SET_ARTICLES_LIMIT, SET_CURRENT_PAGE, SORT_ARTICLES} from "../actionTypes/articlesActionTypes";

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

const sortingArticles = (articles: IArticle[]) => ({
    type: SORT_ARTICLES,
    articles
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

function* sortArticles(action: any) {
    yield put(setArticles(action.articles));
}

function* watcherArticles() {
    yield takeEvery(LOAD_ARTICLES, fetchLoadArticle)
}function* watcherArticlesSort() {
    yield takeEvery(SORT_ARTICLES, sortArticles)
}

export { sortingArticles, watcherArticlesSort, loadArticles, watcherArticles, setArticles, setArticlesLimit, setCurrentPage}
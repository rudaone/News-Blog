import { IArticle, IBlog, ISelectedPage } from "../../../types";
import { LOAD_SELECTED_PAGE, SET_SELECTED_PAGE } from "../actionTypes/articlesActionTypes";
import { put, takeEvery } from "redux-saga/effects";


const setSelectedPage = (selectedPage: ISelectedPage) => ({
    type: SET_SELECTED_PAGE,
    selectedPage
})

const loadSelectedPage = (id: string) => ({
    type: LOAD_SELECTED_PAGE,
    id
})


function* fetchSelectedPage(action: any) {
    if (window.location.pathname === `/blogs/${action.id}`) {
        const resp: Response = yield fetch(`https://api.spaceflightnewsapi.net/v4/blogs/${action.id}`)
        const selectedPage: IBlog = yield resp.json();
        yield put(setSelectedPage(selectedPage));
        console.log(selectedPage)
    } if (window.location.pathname === `/articles/${action.id}`) {
        const resp: Response = yield fetch(`https://api.spaceflightnewsapi.net/v4/articles/${action.id}`)
        const selectedPage: IArticle = yield resp.json();
        yield put(setSelectedPage(selectedPage));
        console.log(selectedPage)
    }
}


function* watcherSelectedPage() {
    yield takeEvery(LOAD_SELECTED_PAGE, fetchSelectedPage)

}

export { watcherSelectedPage, setSelectedPage, loadSelectedPage } 
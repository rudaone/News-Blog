import { put, takeEvery } from "redux-saga/effects";
import { IBlog, IBlogInfo, IBlogResponse, ISelectedPage } from "../../../types";
import { LOAD_BLOGS, SET_BLOGS, SET_BLOGS_LIMIT, SET_CURRENT_PAGE, LOAD_SELECTED_PAGE, SET_SELECTED_PAGE } from "../actionTypes/blogsActionTypes";

const setBlogs = (blogs: IBlog[]) => ({
    type: SET_BLOGS,
    blogs
})

const loadBlogs = (blogInfo: IBlogInfo) => ({
    type: LOAD_BLOGS,
    blogInfo

})

const setBlogsLimit = (limit: number) => ({
    type: SET_BLOGS_LIMIT,
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

function* fetchLoadBlog(action: any) {
    const { limit, currentPage, search } = action.blogInfo;

    let url = `https://api.spaceflightnewsapi.net/v4/blogs/?format=json&limit=${limit}&offset=${(currentPage - 1) * limit}`
    if (search) {
        url += '&title_contains=' + search
    }
    const resp: Response = yield fetch(url);
    const data: IBlogResponse = yield resp.json();
    console.log(data.results)
    yield put(setBlogs(data.results));
    console.log(data.results)

}

function* fetchSelectedPage(action: any) {
    const resp: Response = yield fetch(`https://api.spaceflightnewsapi.net/v4/blogs/${action.id}`)
    const selectedPage: IBlog = yield resp.json();
    yield put(setSelectedPage(selectedPage));
    console.log(selectedPage)
}

function* watcherBlogs() {
    yield takeEvery(LOAD_BLOGS, fetchLoadBlog)
    yield takeEvery(LOAD_SELECTED_PAGE, fetchSelectedPage)

}

export { loadBlogs, watcherBlogs, setBlogs, setBlogsLimit, setCurrentPage }
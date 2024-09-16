import { put, takeEvery } from "redux-saga/effects";
import { IBlog, IBlogInfo, IBlogResponse} from "../../../types";
import { LOAD_BLOGS, SET_BLOGS, SET_BLOGS_LIMIT, SET_CURRENT_PAGE, SORT_BLOGS} from "../actionTypes/blogsActionTypes";

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

const sortingBlogs = (blogs: IBlog[]) => ({
    type: SORT_BLOGS,
    blogs
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


function* sortBlogs(action: any) {
    yield put(setBlogs(action.blogs));
}


// //     if {article}
// // put(setSelectedPage({title: not found}))

function* watcherBlogs() {
    yield takeEvery(LOAD_BLOGS, fetchLoadBlog)
    yield takeEvery(SORT_BLOGS, sortBlogs)

}

export { loadBlogs, watcherBlogs, setBlogs, setBlogsLimit, setCurrentPage, sortingBlogs } 
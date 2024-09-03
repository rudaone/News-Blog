import { IArticleState, IBlog, IBlogState } from '../../../types';
import {
    SET_BLOGS,
    SET_BLOGS_LIMIT,
    SET_CURRENT_PAGE

} from '../actionTypes/blogsActionTypes';



const initialState = {
    blogs: [] as IBlog[],
    limit: 12,
    currentPage: 1,
};

const blogsReducer = (state: IBlogState = initialState, action: any) => {
    switch (action.type) {
        case SET_BLOGS: {
            return {
                ...state,
                blogs: action.blogs,
            };
        }
        case SET_BLOGS_LIMIT: {
            return ({
                ...state,
                limit: action.limit
            })
        }

        case SET_CURRENT_PAGE: {
            return ({
                ...state,
                currentPage: action.currentPage
            })
        }


        default: {
            return state;
        }
    }
};

export { blogsReducer };
import { IArticle, IArticleState, ISelectedPage } from '../../../types';
import {
    SET_ARTICLES,
    SET_ARTICLES_LIMIT,
    SET_CURRENT_PAGE,
    SET_SELECTED_PAGE

} from '../actionTypes/articlesActionTypes';



const initialState = {
    articles: [] as IArticle[],
    limit: 12,
    currentPage: 1,
    selectedPage: {} as ISelectedPage,

};

const articlesReducer = (state: IArticleState = initialState, action: any) => {
    switch (action.type) {
        case SET_ARTICLES: {
            return {
                ...state,
                articles: action.articles,
            };
        }
        case SET_ARTICLES_LIMIT: {
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

        case SET_SELECTED_PAGE: {
            return {
                ...state,
                selectedPage: action.selectedPage,
            };
        }



        default: {
            return state;
        }
    }
};

export { articlesReducer };
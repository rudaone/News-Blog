import {ISelectedPage, ISelectedPageState } from '../../../types';
import {
    SET_SELECTED_PAGE

} from '../actionTypes/blogsActionTypes';



const initialState = {
    selectedPage: {} as ISelectedPage,
};

const selectedPageReducer = (state: ISelectedPageState = initialState, action: any) => {
    switch (action.type) {

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

export { selectedPageReducer };
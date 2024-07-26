import { IUIState, THEMES } from "../../types"
import { SET_THEME} from "../actionTypes/uiActionTypes";

const initialUIState = {
    theme: THEMES.LIGHT,
    popup: false,
};

const uiReducer = (state: IUIState = initialUIState, action: any) => {
    switch (action.type) {
        case SET_THEME:
            return { ...state, theme: action.theme };
        default:
            return state;
    }
};

export { uiReducer }
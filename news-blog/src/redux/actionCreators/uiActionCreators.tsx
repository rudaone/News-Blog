import { SET_THEME } from '../actionTypes/uiActionTypes';
import { THEMES } from '../../types';

const setTheme = (theme: THEMES) => ({
    type: SET_THEME,
    theme,
});

export { setTheme };
/**
 * Core Packages
 */
import { combineReducers } from 'redux';

/**
 * Reducers
 */
import page from './page/page.reducer';
import talents from './talents/talents.reducer';
import theme from './theme/theme.reducer';

/**
 * Combinig
 */
const appReducer = combineReducers({
    page,
    talents,
    theme,
});

/**
 * Root Reducer
 */
const rootReducer = (state, action) => {
    return appReducer(state, action);
};

/**
 * Exporting
 */
export default rootReducer;

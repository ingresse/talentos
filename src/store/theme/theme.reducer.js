/**
 * Types
 */
import TYPES from './theme.types';

/**
 * Settings
 */
import { theme as settings } from '../../settings';

/**
 * Initial State
 */
const INITIAL_STATE = {
    ...settings,
};

/**
 * Theme Reducer
 *
 * @param {object} state
 * @param {object} action
 *
 * @returns state
 */
function theme(state = INITIAL_STATE, action = {}) {
    const {
        type,
        theme,
    } = action;

    switch (type) {
        case TYPES.SET:
            return {
                ...state,
                ...(theme || {}),
            };

        default:
            return state;
    }
}

/**
 * Exporting
 */
export default theme;

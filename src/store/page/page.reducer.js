/**
 * Types
 */
import TYPES from './page.types';

/**
 * Initial State
 */
const INITIAL_STATE = {
    navbarDocked: true,
    subtitle    : '',
};

/**
 * Page Reducer
 *
 * @param {object} state
 * @param {object} action
 *
 * @returns state
 */
function page(state = INITIAL_STATE, action = {}) {
    const {
        type,
        page,
    } = action;

    switch (type) {
        case TYPES.SET:
            return {
                ...state,
                ...(page || {})
            };

        default:
            return state;
    }
}

/**
 * Exporting
 */
export default page;

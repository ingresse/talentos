/**
 * Types
 */
import TYPES from './talents.types';

/**
 * Initial Model
 */
const INITIAL_MODEL = {
    content: null,
    error  : null,
    loading: true,
};

/**
 * Initial State
 */
const INITIAL_STATE = {
    details: INITIAL_MODEL,
    list   : {
        initialized: false,
        ...INITIAL_MODEL,
    },
};

/**
 * Talents Reducer
 *
 * @param {object} state
 * @param {object} action
 *
 * @returns state
 */
function talents(state = INITIAL_STATE, action = {}) {
    const { type, data, error } = action;

    switch (type) {
        case TYPES.CLEAR:
            return INITIAL_STATE;

        case TYPES.LIST:
            return {
                ...state,
                list: {
                    ...INITIAL_MODEL,
                    loading: true,
                    initialized: true,
                },
            };

        case TYPES.LIST_ERROR  :
        case TYPES.LIST_SUCCESS:
            return {
                ...state,
                list: {
                    ...state.list,
                    content: ((data && data.length) ? data : null),
                    error  : (error || null),
                    loading: false,
                },
            };

        default:
            return state;
    }
}

/**
 * Exporting
 */
export default talents;

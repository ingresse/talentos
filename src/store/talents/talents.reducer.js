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
        search     : null,
        roles      : null,
        cities     : null,
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
    const {
        type,
        data,
        error,
    } = action;

    const {
        list,
        roles,
        cities,
    } = (data || {});

    switch (type) {
        case TYPES.CLEAR:
            return INITIAL_STATE;

        case TYPES.LIST:
            return {
                ...state,
                list: {
                    ...INITIAL_STATE.list,
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
                    content: ((list && list.length) ? list : null),
                    roles  : ((roles && roles.length) ? roles : null),
                    cities : ((cities && cities.length) ? cities : null),
                    error  : (error || null),
                    loading: false,
                },
            };

        case TYPES.SEARCH:
            return {
                ...state,
                list: {
                    ...state.list,
                    search: ((data && data.length) ? data : null),
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

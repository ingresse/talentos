/**
 * Types
 */
import TYPES from './talents.types';

/**
 * Fetch
 *
 * @returns {object}
 */
export function list(id) {
    return {
        type: TYPES.LIST,
        id: id
    };
}

/**
 * Fetch Error
 *
 * @param {object} error
 *
 * @returns {object}
 */
export function listError(error = null) {
    return {
        type: TYPES.LIST_ERROR,
        error: error
    };
}

/**
 * Fetch Success
 *
 * @param {object} data
 *
 * @returns {object}
 */
export function listSuccess(data = null) {
    return {
        type: TYPES.LIST_SUCCESS,
        data: data
    };
}

/**
 * Clear Talent data
 *
 * @returns {object}
 */
export function clear() {
    return {
        type: TYPES.CLEAR
    };
}

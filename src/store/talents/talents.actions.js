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
 * Filter Talents List
 *
 * @param {array} list
 * @param {array} roles
 *
 * @returns {object}
 */
export function filter(
    list  = [],
    roles = [],
) {
    let _data  = [];
    let _roles = (roles || []).map((role) => role.label);

    (list || []).map((professional) => {
        if (!professional ||
            !professional.Cargo ||
            !_roles.includes(professional.Cargo)) {
            return false;
        }

        _data.push(professional);

        return true;
    });

    return {
        type : TYPES.SEARCH,
        data : _data,
        roles: roles,
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

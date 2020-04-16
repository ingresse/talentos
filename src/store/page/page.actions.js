/**
 * Types
 */
import TYPES from './page.types';

/**
 * Page definition
 *
 * @param {object} page - page definitions
 *
 * @returns {object}
 */
export function set(page) {
    return {
        type: TYPES.SET,
        page: page
    };
}

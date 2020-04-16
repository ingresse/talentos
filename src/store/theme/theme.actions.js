/**
 * Types
 */
import TYPES from './theme.types';

/**
 * Theme definition
 *
 * @param {object} theme - theme definitions
 *
 * @returns {object}
 */
export function set(theme = {}) {
    return {
        type : TYPES.SET,
        theme: theme,
    };
}

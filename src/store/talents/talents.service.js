/**
 * Services
 */
import {
    spreadsheets as service,
} from '../../services';

/**
 * Talents list
 *
 * @returns {Promise}
 */
function list() {
    return service.list();
}

/**
 * Exporting
 */
export const talents = {
    list,
};

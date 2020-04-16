/**
 * Services
 */
import {
    spreadsheets as service,
} from '../../services';

/**
 * Adapters
 */
import {
    adapterList,
} from './talents.adapters';

/**
 * Talents list
 *
 * @returns {Promise}
 */
function list() {
    return new Promise((resolve, reject) => {
        service.list()
        .then((list) => {
            resolve(adapterList(list));
        })
        .catch(reject);
    });
}

/**
 * Exporting
 */
export const talents = {
    list,
};

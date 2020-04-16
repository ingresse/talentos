/**
 * Utilities
 */
import {
    sortByProperty,
} from '../../utils';

/**
 * List Adapter
 *
 * @param {array} list
 *
 * @returns {object}
 */
function adapterList(list = []) {
    let _cities = [];
    let cities  = [];
    let _roles  = [];
    let roles   = [];

    list.map((professional) => {
        const {
            Cargo : role,
            Cidade: originalCity,
        } = (professional || {});

        let city = originalCity;

        try {
            city = originalCity.split('/')[0].trim().split('-')[0].trim();
        } catch (e) {}

        if (city && !_cities.includes(city)) {
            _cities.push(city);
            cities.push({
                value: city,
                label: city,
            });
        }

        if (role && !_roles.includes(role)) {
            _roles.push(role);
            roles.push({
                value: role,
                label: role,
            });
        }

        return true;
    });

    cities = sortByProperty(cities, 'label');
    roles  = sortByProperty(roles, 'label');

    return {
        list,
        roles,
        cities,
    };
}

/**
 * Exporting
 */
export {
    adapterList,
};
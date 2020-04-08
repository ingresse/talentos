/**
 * Core Packages
 */
import { lazy } from 'react';

/**
 * Instant Pages
 */
import Index from './Index/Index';

/**
 * Routes
 */
const routes = {
    index: {
        menu : '',
        title: `Profissionais de Tecnologia`,
        path : '/',
        page : Index,
    },

    profile: {
        menu : '',
        title: 'Perfil do Profissional',
        path : '/profissional/:rowId',
        page : lazy(() => import('./Profile/Profile')),
    },
};

/**
 * Get Route
 *
 * @param {string} path
 *
 * @returns {object}
 */
function get(path = '') {
    let found = null;

    Object.keys(routes).some((routeKey) => {
        if (routes[routeKey].path === path) {
            found = routes[routeKey];

            return true;
        }

        return false;
    });

    return found;
}

/**
 * Exporting
 */
export {
    routes,
    get,
};

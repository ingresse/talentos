/**
 * Core Packages
 */
import { all, call, put, takeLatest } from 'redux-saga/effects';

/**
 * Context
 */
import TYPES from './talents.types';
import {
    listError,
    listSuccess,
} from './talents.actions';

/**
 * Services
 */
import {
    analytics,
    talents,
} from '../../services';

/**
 * Fetch Talents list
 */
function* list() {
    try {
        const talentsData = yield call(talents.list);

        yield put(listSuccess(talentsData));
    } catch (error) {
        yield put(listError(error));
    }
}

/**
 * Filter Talents List (only analytics)
 *
 * @param {array} roles
 */
function filter({
    roles,
}) {
    const filteredRoles = (roles || []).map((role) => role.label);

    analytics.gtag('event', 'search', {
        search_term: (filteredRoles.join(', ') || 'Limpou o filtro de Cargos'),
    });
}

/**
 * Exporting
 */
export default all([
    takeLatest(TYPES.LIST, list),
    takeLatest(TYPES.SEARCH, filter),
]);

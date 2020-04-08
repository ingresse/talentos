/**
 * Core Packages
 */
import { all, call, put, takeLatest } from 'redux-saga/effects';

/**
 * Context
 */
import TYPES from './talents.types';
import { listError, listSuccess } from './talents.actions';

/**
 * Services
 */
import { talents } from '../../services';

/**
 * Fetch Talents list
 *
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
 * Exporting
 */
export default all([takeLatest(TYPES.LIST, list)]);

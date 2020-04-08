/**
 * Core Packages
 */
import { all } from 'redux-saga/effects';

/**
 * Sagas
 */
import talents from './talents/talents.sagas';

/**
 * Exporting
 */
export default function* rootSaga() {
    return yield all([
        talents,
    ]);
}

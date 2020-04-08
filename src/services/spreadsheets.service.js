/**
 * Core Packages
 */
import tabletop from 'tabletop';

/**
 * Settings
 */
import {
    base as settings,
} from '../settings';

/**
 * Spreadsheets Service
 */
export const spreadsheets = {
    list: (spreadsheetId = settings.spreadsheetId, query) => {
        return tabletop.init({
            key        : spreadsheetId,
            simpleSheet: true,
            query,
        });
    },
};

/**
 * Core Packages
 */
import trackers from '@ingresse/trackers';

/**
 * Settings
 */
import {
    base as settings,
} from '../settings';

/**
 * Initialize
 */
trackers(settings.analytics);

/**
 * Exporting
 */
export const analytics = trackers;

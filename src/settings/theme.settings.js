/**
 * Core Packages
 */
import {
    colors,
} from '@ingresse/aphrodite';

const main    = 'ocean';
const accent  = colors.get('white');
const regular = colors.get(main);
const dark    = colors.get(main, 'dark');
const light   = colors.get(main, 'light');
const crystal = colors.get(main, 'crystal');
const themed  = (
    colors
    .set('primary', regular, dark, light, crystal)
    .set('secondary', regular, regular, light, crystal)
    .set('accent', accent)
);

/**
 * Theme Settings
 */
export const theme = {
    ...themed,
    main,
};

/**
 * Re-exporting Libraries
 */
export { css, jsx, Global } from '@emotion/core';
export { default as styled } from '@emotion/styled';
export { ThemeProvider, useTheme } from 'emotion-theming';
export { colors, gradients, useWindowSize } from '@ingresse/aphrodite';

/**
 * CSS parts
 */
export const truncate = {
    overflow    : 'hidden',
    whiteSpace  : 'nowrap',
    textOverflow: 'ellipsis',
};

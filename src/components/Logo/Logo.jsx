/** @jsx jsx */
import { NavLink } from 'react-router-dom';

/**
 * Styles
 */
import {
    css,
    jsx,
    useTheme,
} from '../../css';

/**
 * Settings
 */
import {
    routes,
} from '../../pages';

/**
 * Component Itself
 */
function Logo() {
    /**
     * Styles
     */
    const theme  = useTheme();
    const styles = css`
        font-weight: bold;
        font-size  : 24px;
        line-height: 30px;

        position: relative;
        display : inline-block;
        margin  : 0;
        padding : 5px 20px;

        border-radius: 5px;

        color: ${theme.get('inverse')};
        background-color: ${theme.get('inverse', '', 0.15)};

        transition: background-color .3s ease, color .3s ease !important;

        &:hover {
            color: ${theme.get('inverse')};
            background-color: ${theme.get('inverse', '', 0.25)};
        }
    `;

    /**
     * Render
     */
    return (
        <NavLink
            css={styles}
            to={routes.index.path}>
            TALENTOS
        </NavLink>
    );
}

/**
 * Exporting
 */
export { Logo };

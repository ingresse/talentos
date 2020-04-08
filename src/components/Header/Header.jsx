/**
 * Core Packages
 */
import React, { useState } from 'react';

/**
 * Pages
 */
import {
    routes,
} from '../../pages';

/**
 * Composition Components
 */
import HeaderMenu from './HeaderMenu';
import {
    Container,
    Logo,
} from '../../components';

/**
 * Component Styles
 */
import HeaderStyled from './HeaderStyled';

/**
 * Component Itself
 */
function Header({
    theme,
    loading,
}) {
    /**
     * Local values
     */
    const [ drawer, setDrawer ] = useState(false);

    /**
     * Toggle Drawer Visibility
     */
    function toggleDrawer() {
        setDrawer(!drawer);
    }

    /**
     * Render
     */
    return (
        <HeaderStyled
            id="header"
            className="header">
            <Container fluid>
                <Logo
                    className="header__brand"
                />
            </Container>

            {(!theme.xs || true) ? (null) : (
                <>
                    {(drawer) ? (null) : (
                        <button
                            type="button"
                            onClick={toggleDrawer}
                            className="header__menu-toggle">
                            <span className="header__menu-toggle__stripe">
                                menu
                            </span>
                        </button>
                    )}
                    <div
                        id="header__drawer"
                        onClick={toggleDrawer}
                        className={`header__drawer${!drawer ? '' : ' active'}`}>
                        <Logo
                            className="header__brand"
                        />
                        <button
                            type="button"
                            onClick={toggleDrawer}
                            className="header__menu-toggle">
                            close
                        </button>
                        <HeaderMenu
                            routes={routes}
                        />
                    </div>
                </>
            )}
        </HeaderStyled>
    );
}

/**
 * Exporting
 */
export { Header };

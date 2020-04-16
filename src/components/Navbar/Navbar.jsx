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
import NavbarMenu from './NavbarMenu';
import {
    Container,
    Logo,
} from '../../components';

/**
 * Component Styles
 */
import NavbarStyled from './NavbarStyled';

/**
 * Component Itself
 */
function Navbar({
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
        <NavbarStyled
            id="navbar"
            className="navbar">
            <Container fluid>
                <Logo
                    className="navbar__brand"
                />
            </Container>

            {(!theme.xs || true) ? (null) : (
                <>
                    {(drawer) ? (null) : (
                        <button
                            type="button"
                            onClick={toggleDrawer}
                            className="navbar__menu-toggle">
                            <span className="navbar__menu-toggle__stripe">
                                menu
                            </span>
                        </button>
                    )}
                    <div
                        id="navbar__drawer"
                        onClick={toggleDrawer}
                        className={`navbar__drawer${!drawer ? '' : ' active'}`}>
                        <Logo
                            className="navbar__brand"
                        />
                        <button
                            type="button"
                            onClick={toggleDrawer}
                            className="navbar__menu-toggle">
                            close
                        </button>
                        <NavbarMenu
                            routes={routes}
                        />
                    </div>
                </>
            )}
        </NavbarStyled>
    );
}

/**
 * Exporting
 */
export { Navbar };

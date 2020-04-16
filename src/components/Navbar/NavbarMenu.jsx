/**
 * Core Packages
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Component Itself
 */
function NavbarMenu ({
    children,
    routes,
    handleClick,
}) {
    /**
     * Render
     */
    return (
        <nav
            role="navigation"
            className="navbar__nav">
            {children}
            <ul className="navbar__nav__menu">
                {Object.keys(routes).map((routeKey) => {
                    const route = routes[routeKey];

                    if (route.subOf || !route.menu) {
                        return (null);
                    }

                    return (
                        <li
                            key={routeKey}
                            className="navbar__nav__menu__item">
                            <NavLink
                                to={route.path}
                                onClick={handleClick}
                                aria-haspopup={!!route.multi}
                                activeClassName="active"
                                className="navbar__nav__menu__item__link">
                                {route.menu}
                            </NavLink>
                            {(!route.multi) ? (null) : (
                                <div
                                    aria-label="submenu"
                                    className="navbar__nav__menu__item__submenu">
                                    {Object.keys(routes).map((subRouteKey) => {
                                        const routeSub  = routes[subRouteKey];
                                        const { subOf } = (routeSub || {});

                                        if (subOf !== routeKey) {
                                            return (null);
                                        }

                                        return (
                                            <NavLink
                                                to={routeSub.path}
                                                onClick={handleClick}
                                                id={subRouteKey}
                                                key={subRouteKey}
                                                className="navbar__nav__menu__item__submenu__item">
                                                {routeSub.menu}
                                            </NavLink>
                                        );
                                    })}
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

/**
 * Exporting
 */
export default NavbarMenu;

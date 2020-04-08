/**
 * Core Packages
 */
import React, { Suspense, useEffect } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { useDispatch } from 'react-redux';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';

/**
 * Pages
 */
import {
    routes,
} from './pages';

/**
 * Styles
 */
import { useWindowSize } from './css';

/**
 * Settings
 */
import {
    theme as baseTheme,
} from './settings';

/**
 * Context actions
 */
import {
    theme as themeActions
} from './actions';

/**
 * Composition Components
 */
import {
    Wrapper,
} from './components';

/**
 * Component Itself
 */
function AppRouter() {
    /**
     * Context values
     */
    const dispatch = useDispatch();
    const layout   = useWindowSize();
    const theme    = {
        ...baseTheme,
        ...layout,
    };

    /**
     * Theme Listener
     */
    useEffect(() => {
        dispatch(themeActions.set(theme));
    }, [ dispatch, theme ]);

    /**
     * Render
     */
    return (
        <HashRouter>
            <ThemeProvider
                theme={theme}>
                <Wrapper
                    theme={theme}>
                    <Suspense fallback={(<div>...</div>)}>
                        <Switch>
                            {Object.keys(routes).map((routeKey) => {
                                const route = routes[routeKey];
                                const Page  = route.page;

                                return (
                                    <Route
                                        exact
                                        key={routeKey}
                                        path={route.path}>
                                        <Page />
                                    </Route>
                                );
                            })}
                        </Switch>
                    </Suspense>
                </Wrapper>
            </ThemeProvider>
        </HashRouter>
    );
}

/**
 * Exporting
 */
export default AppRouter;

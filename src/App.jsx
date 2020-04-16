/**
 * Core Packages
 */
import React from 'react';
import { Provider } from 'react-redux';

/**
 * Composition Components
 */
import AppRouter from './AppRouter';

/**
 * Context
 */
import store from './store';

/**
 * Component Itself
 */
function App() {
    /**
     * Render
     */
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
}

/**
 * Exporting
 */
export default App;

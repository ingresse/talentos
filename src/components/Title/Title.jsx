/**
 * Core Packages
 */
import React from 'react';
import { useSelector } from 'react-redux';

/**
 * Composition Components
 */
import {
    H2,
    H3,
} from '../';

/**
 * Component Itself
 */
function Title({
    margin,
    styles,
    ...props
}) {
    /**
     * Context values
     */
    const { xs } = useSelector((state) => state.theme || {});

    /**
     * Local values
     */
    const Element = xs ? H3 : H2;

    /**
     * Render
     */
    return (
        <Element
            {...props}
            margin={margin || '5px 0'}
            styles={{
                ...(styles || {}),
                lineHeight: `${xs ? 3 : 4}0px`,
            }}
        />
    );
}

/**
 * Exporting
 */
export { Title };

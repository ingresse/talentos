/**
 * Core Packages
 */
import React from 'react';

/**
 * Services
 */
import {
    analytics,
} from '../../services';

/**
 * Composition Components
 */
import {
    Button,
    Segment,
} from '../';

const defaultText = 'Quero Entrar na Lista';

/**
 * Component Itself
 */
function Join({
    xs    = false,
    align = 'center',

    children = defaultText,
}) {
    /**
     * Local values
     */
    const href = (
        'mailto:talentos@ingresse.com?subject=' +
        encodeURIComponent('[ Rede de Talentos ] ' + children)
    );

    /**
     * Handle Click
     */
    function handleClick() {
        analytics.gtag('event', children);
    }

    /**
     * Render
     */
    return (
        <Segment
            textAlign={align}
            padding={xs ? '0 0 20px' : '10px 0'}
            styles={{
                lineHeight: '0',
            }}>
            <Button
                link
                as="a"
                href={href}
                target="_blank"
                block={xs}
                small={xs}
                styles={{
                    minWidth: '230px',
                }}
                onClick={handleClick}>
                {children}
            </Button>
        </Segment>
    );
}

/**
 * Exporting
 */
export { Join };

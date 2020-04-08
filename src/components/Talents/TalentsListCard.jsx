/**
 * Core Packages
 */
import React from 'react';

/**
 * CSS
 */
import {
    truncate,
} from '../../css';

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
    /**
     * Grid
     */
    Row,
    Col,
    Card,
    Placeholder,

    /**
     * Typography
     */
    H2,
    H3,
    Text,
} from '../';

/**
 * Component Itself
 */
function TalentsListCard({
    xs      = false,
    theme   = {},
    loading = false,

    id            = '',
    name          = '',
    role          = '',
    formerCompany = '',
    city          = '',
    linkedin      = '',
}) {
    /**
     * Link
     */
    const link = (!linkedin || !linkedin.includes('http') ? (
        'https://www.linkedin.com/search/results/people/?keywords=' +
        encodeURIComponent(linkedin || name) +
        '&origin=INGRESSE_LISTA_DE_TALENTOS_LINK'
    ) : linkedin);

    /**
     * Handle Click
     */
    function handleClick() {
        analytics.gtag('event', (linkedin || name), {
            'event_category': 'LinkedIn aberto',
        });
    }

    /**
     * Local values
     */
    const margin    = '5px 0';
    const Title     = (xs ? H3 : H2);
    const Role      = (xs ? Text : H3);
    const Element   = (loading ? Placeholder : Card);
    const elemProps = (loading ? {
        as   : 'div',
        block: true,
    } : {
        as     : 'a',
        target : '_blank',
        rel    : 'no referrer',
        href   : link,
        title  : 'Perfil do Profissional no LinkedIn',
        onClick: handleClick,
    });
    const elemSpaces = {
        margin : '10px 0',
        padding: '10px 20px',
    };
    const elemStyles = loading ? elemSpaces : {
        ...elemSpaces,

        zIndex   : 10,
        position : 'relative',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        color    : theme.base,

        transform: 'scale(1)',

        transitionProperty      : 'box-shadow, color, transform, z-index',
        transitionDuration      : '0.15s',
        transitionTimingFunction: 'ease-in-out',

        '&:active, &:focus, &:hover': {
            zIndex   : 11,
            color    : theme.primary,
            boxShadow: '0 0 40px rgba(0,0,0,0.2)',
            transform: 'scale(1.05)',
        },
    };

    /**
     * Render
     */
    return (
        <Element
            id={id}
            {...elemProps}
            styles={elemStyles}>
            <Title
                margin={margin}
                title={`Nome: ${name}`}
                id={id.concat('-name')}
                styles={{
                    ...truncate,
                    lineHeight: (xs ? '30px' : null),
                }}>
                {!loading ? name : (
                    <Placeholder
                        block
                        as="span"
                        width={280}
                        height={xs ? 20 : 28}
                        styles={{
                            margin: (xs ? '3px 0 7px' : '0 0 2px'),
                        }}
                    />
                )}
            </Title>
            <Role
                helper
                margin={margin}
                styles={truncate}
                title={`Cargo: ${role}`}
                id={id.concat('-role')}>
                {!loading ? role : (
                    <Placeholder
                        block
                        as="span"
                        width={240}
                        height={xs ? 16 : 20}
                        styles={{
                            margin: (xs ? '2px 0' : '3px 0 1px'),
                        }}
                    />
                )}
            </Role>
            <Row>
                {(!city && !loading) ? null : (
                    <Col
                        xs={12}
                        sm={6}>
                        <Text
                            helper
                            margin={!xs ? margin : '0 0 5px'}
                            styles={truncate}
                            title={`Cidade: ${city}`}
                            id={id.concat('-city')}>
                            {!loading ? city : (
                                <Placeholder
                                    block
                                    as="span"
                                    width={120}
                                    height={16}
                                    styles={{
                                        margin: !xs ? null : '2px 0'
                                    }}
                                />
                            )}
                        </Text>
                    </Col>
                )}
                {(!formerCompany && !loading) ? null : (
                    <Col
                        xs={12}
                        sm={6}>
                        <Text
                            helper
                            margin={!xs ? margin : '0 0 5px'}
                            styles={truncate}
                            title={`Empresa anterior: ${formerCompany}`}
                            id={id.concat('-former-company')}>
                            {!loading ? formerCompany : (
                                <Placeholder
                                    block
                                    as="span"
                                    width={90}
                                    height={16}
                                    styles={{
                                        margin: !xs ? null : '2px 0'
                                    }}
                                />
                            )}
                        </Text>
                    </Col>
                )}
            </Row>
        </Element>
    );
}

/**
 * Exporting
 */
export default TalentsListCard;

/**
 * Core Packages
 */
import React, { useState } from 'react';

/**
 * Composition Components
 */
import SearchRole from './TalentsSearchRole';
import {
    /**
     * Grid
     */
    Col,
    Row,
    Segment,

    /**
     * Specifics
     */
    Join,
    JoinModal,
} from '../';

/**
 * Component Itself
 */
function TalentsSearch({
    xs,
}) {
    /**
     * Local values
     */
    const [ modal, setModal ] = useState(false);

    /**
     * Local Component
     */
    function ColAction({
        asContributor,
    }) {
        /**
         * Local values
         */
        const btnText = (asContributor ? 'Quero Colaborar' : 'Quero Entrar na Lista');

        return (
            <Col
                xs={8}
                sm={3}>
                <Join
                    xs={xs}>
                    {btnText}
                </Join>
            </Col>
        );
    }

    function Actions() {
        return (
            <>
                <ColAction
                    asContributor={true}
                />
                <ColAction
                    asContributor={false}
                />
            </>
        );
    }

    /**
     * Render
     */
    return (
        <Segment
            padding="0 0 60px"
            styles={{
                zIndex  : 20,
                position: 'relative',
            }}>
            <Row
                horizontal="center">
                {!xs ? null : (
                    <Actions />
                )}
                <Col
                    xs={12}
                    sm={6}>
                    <SearchRole />
                </Col>
                {xs ? null : (
                    <Actions />
                )}
            </Row>
            <JoinModal
                xs={xs}
                opened={modal}
                openedCallback={setModal}
            />
        </Segment>
    );
}

/**
 * Exporting
 */
export default TalentsSearch;

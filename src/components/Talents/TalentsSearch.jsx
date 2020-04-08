/**
 * Core Packages
 */
import React from 'react';

/**
 * Composition Components
 */
import {
    /**
     * Grid
     */
    Segment,

    /**
     * Form
     */
    Input,
} from '../';

/**
 * Component Itself
 */
function TalentsSearch() {
    const underConstruction = true;

    if (underConstruction) {
        return null;
    }
    
    /**
     * Render
     */
    return (
        <Segment
            padding="0 0 10px">
            <Input
                type="text"
                id="searc"
                name="search"
                label="Encontre um profissional"
            />
        </Segment>
    );
}

/**
 * Exporting
 */
export default TalentsSearch;

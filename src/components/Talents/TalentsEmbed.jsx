/**
 * Core Packages
 */
import React from 'react';

/**
 * Component Itself
 */
function TalentsEmbed({
    spreadsheetEmbedId = '',
    height             = '1280px',
    style              = {},
    ...props
}) {
    if (!spreadsheetEmbedId) {
        return null;
    }

    /**
     * Render
     */
    return (
        <iframe
            title="spreadsheet"
            src={`https://docs.google.com/spreadsheets/u/1/d/e/${spreadsheetEmbedId}/pubhtml?widget=true&headers=true`}
            style={{
                width : '100%',
                height: height,
                ...style,
            }}
        />
    );
}

/**
 * Exporting
 */
export default TalentsEmbed;

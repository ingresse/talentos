/**
 * Core Packages
 */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/**
 * Settings
 */
import {
    base as settings,
} from '../../settings';

/**
 * Context Actions
 */
import {
    talents as actions,
} from '../../actions';

/**
 * Composition Components
 */
import TalentsEmbed from './TalentsEmbed';
import TalentsList from './TalentsList';
import TalentsSearch from './TalentsSearch';

/**
 * Component Itself
 */
function Talents() {
    /**
     * Context values
     */
    const dispatch = useDispatch();
    const theme    = useSelector((state) => state.theme);
    const { xs }   = (theme || {});

    /**
     * Talents values
     */
    const {
        error,
        loading,
        content,
        search,
        initialized,
    } = useSelector((state) => state.talents.list);
    const list = (search || content);

    /**
     * Local values
     */
    const isEmpty      = !!(!loading && ((!content || !content.length) || !!error));
    const displayEmbed = !!(isEmpty && initialized);

    /**
     * First Run
     */
    useEffect(() => {
        if (initialized) {
            return;
        }

        dispatch(actions.list());
    }, [ dispatch, initialized ]);

    /**
     * Render
     */
    return displayEmbed ? (
        <TalentsEmbed
            spreadsheetEmbedId={settings.spreadsheetEmbedId}
        />
    ) : (
        <>
            <TalentsSearch
                xs={xs}
                theme={theme}
                list={list}
                loading={loading}
            />
            <TalentsList
                xs={xs}
                theme={theme}
                list={list}
                loading={loading}
            />
        </>
    );
}

/**
 * Exporting
 */
export { Talents };

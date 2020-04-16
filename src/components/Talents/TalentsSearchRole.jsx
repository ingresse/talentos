/**
 * Core Packages
 */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/**
 * Actions
 */
import {
    talents as actions,
} from '../../actions';

/**
 * Composition Components
 */
import {
    /**
     * Form
     */
    Autocomplete,
} from '../';

/**
 * Component Itself
 */
function TalentsSearchRole({
    xs,
}) {
    /**
     * Context values
     */
    const {
        loading,
        roles,
        content: list,
    } = useSelector((state) => state.talents.list || {});
    const dispatch = useDispatch();

    /**
     * Local values
     */
    const isEmpty = !!(!roles || !roles.length);
    const [ , setSelected ] = useState(null);

    /**
     * Handle Selected option
     *
     * @param {array} options
     */
    function handleSelected(options) {
        setSelected(options);
        dispatch(actions.filter(list, options));
    }

    /**
     * Render
     */
    return (
        <Autocomplete
            id={12345}
            name="search-professional-by-role"
            placeholder={`${xs ? '' : 'Encontrar '}Profissionais por Cargo`}
            isMulti={true}
            isLoading={loading}
            isDisabled={isEmpty}
            options={roles}
            onChange={handleSelected}
        />
    );
}

/**
 * Exporting
 */
export default TalentsSearchRole;

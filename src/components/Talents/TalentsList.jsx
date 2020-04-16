/**
 * Core Packages
 */
import React from 'react';

/**
 * Composition Components
 */
import {
    Row,
    Col,
} from '../';
import ProfessionalCard from './TalentsListCard';

/**
 * Component Itself
 */
function TalentsList({
    xs,
    theme,
    list,
    loading,
}) {
    /**
     * Render
     */
    return (
        <Row
            vertical="start"
            horizontal="center">
            {(list || Array.from({ length: 20 })).map((Professional, index) => {
                const {
                    Nome    : name,
                    Cargo   : role,
                    Empresa : formerCompany,
                    LinkedIn: linkedin,
                    Cidade  : city,
                    "Área de Atuação"  : occupationArea,
                } = (Professional || {});
                const elId = `professional-found-${index}`;

                return (
                    <Col
                        xs={12}
                        sm={6}
                        md={4}
                        lg={4}
                        xl={3}
                        key={elId}>
                        <ProfessionalCard
                            xs={xs}
                            theme={theme}
                            loading={loading}

                            id={elId}
                            name={name}
                            role={role}
                            formerCompany={formerCompany}
                            city={city}
                            linkedin={linkedin}
                            occupationArea={occupationArea}
                        />
                    </Col>
                );
            })}
        </Row>
    );
}

/**
 * Exporting
 */
export default TalentsList;

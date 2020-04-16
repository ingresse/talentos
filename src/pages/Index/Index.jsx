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
    Col,
    Row,
    Section,
    Container,

    /**
     * Typography
     */
    A,

    /**
     * Specifics
     */
    Talents,
} from '../../components';

/**
 * Page Itself
 */
function Index() {
    /**
     * Render
     */
    return (
        <section
            id="home">
            <Container fluid>
                <Row
                    vertical="start"
                    horizontal="center">
                    <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={4}>
                        <Section
                            first
                            id="home-disclaimer"
                            title={(
                                <span>
                                    A 
                                    {' '}
                                    <A
                                        target="_blank"
                                        href="https://www.ingresse.com">
                                        <strong>Ingresse</strong>
                                    </A>
                                    {' '}
                                    apoia a iniciativa de <strong>realocar os profissionais</strong> de tecnologia afetados pela crise atual causada pelo <strong>COVID-19</strong>.
                                </span>
                            )}
                        />
                    </Col>
                    <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={4}>
                        <Section
                            first
                            id="home-goal"
                            title="Para isso, compilamos aqui de maneira colaborativa os contatos de pessoas de grande talento que podem contribuir muito em seu time."
                        />
                    </Col>
                    <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={4}>
                        <Section
                            first
                            id="home-thanks"
                            title={(
                                <>
                                    Obrigado a
                                    {' '}
                                    <A
                                        target="_blank"
                                        href="mailto:norte@norte.capital">
                                        <strong>Norte Capital</strong>
                                    </A>
                                    {' '}
                                    que compilou a lista e aos fundadores que disponibilizaram os bancos de dados de talentos.
                                </>
                            )}
                        />
                    </Col>
                </Row>
                <Section
                    id="home-professionals">
                    <Talents />
                </Section>
            </Container>
        </section>
    );
}

/**
 * Exporting
 */
export default Index;

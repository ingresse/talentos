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
    Section,
    Container,

    /**
     * Typography
     */
    Title,
} from '../../components';

/**
 * Page Itself
 */
function Profile() {
    /**
     * Render
     */
    return (
        <section
            id="profile">
            <Container>
                <Section
                    first
                    id="profile-summary">
                    <Title>
                        Perfil
                    </Title>
                </Section>
            </Container>
        </section>
    );
}

/**
 * Exporting
 */
export default Profile;

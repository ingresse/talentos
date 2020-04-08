/**
 * Core Packages
 */
import React from 'react';

/**
 * Composition Components
 */
import {
    Modal,
    Button,
} from '../';

/**
 * Component Itself
 */
function JoinModal({
    xs          = false,
    contributor = false,

    opened         = false,
    openedCallback = () => {},
}) {
    /**
     * Local values
     */
    const title = (contributor ? 'Quero Colaborar' : 'Quero entrar na lista');

    /**
     * Render
     */
    return (
        <Modal
            title={title}
            opened={opened}
            openedCallback={openedCallback}
            closeOnEscape={true}
            contentJustify="flex-start"
            footer={(
                <Button
                    onClick={() => openedCallback(false)}>
                    Fechar
                </Button>
            )}>
            {(contributor) ? (
                <>
                    TO DO
                </>
            ) : (
                <>
                    TO DO
                </>
            )}
        </Modal>
    );
}

/**
 * Exporting
 */
export { JoinModal };

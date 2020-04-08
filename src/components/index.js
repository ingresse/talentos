/**
 * Library Components Customization
 */
import {
    Button,
} from '@ingresse/aphrodite';

Button.defaultProps = {
    ...Button.defaultProps,
    radius: '0',
};

export {
    Button,
};

/**
 * Re-exporting Library Components
 */
export {
    /**
     * Grid
     */
    Card,
    Dialog,
    Flex,
    Container,
    Col,
    Row,
    Segment,
    Dropdown,
    List,
    ListItem,

    /**
     * Form
     */
    Input,
    InputMask,
    Select,

    /**
     * Typography
     */
    A,
    H1,
    H2,
    H3,
    Text,

    /**
     * Generics
     */
    Avatar,
    Icon,
    Clipboard,
    Placeholder,
} from '@ingresse/aphrodite';

/**
 * Wrapper Components
 */
export * from './Content/Content';
export * from './Header/Header';
export * from './Hero/Hero';
export * from './ListItemLink/ListItemLink';
export * from './Logo/Logo';
export * from './Section/Section';
export * from './Title/Title';
export * from './Wrapper/Wrapper';

/**
 * Dependent Components
 */
export * from './Router/Router';

/**
 * Regular Components
 */
export * from './Talents/Talents';

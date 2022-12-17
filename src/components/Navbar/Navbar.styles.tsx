import { styled } from 'styles';
import { slideInLeft } from '../../styles/animations';

export const DesktopNavbarStyled = styled('div', {
    display: 'none',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    px: '10vw',
    py: '1.2rem',

    backgroundColor: '$almostWhite',
    borderBottom: '2px solid $almostGrey',
    borderTop: 'none',

    p: {
        cursor: 'pointer',

        '&:hover': {
            textDecoration: 'underline',
        },
    },

    '@desktop': {
        display: 'flex',
    },
});

export const RightSection = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
});

export const ImageSection = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',

    '@desktop': {
        flexDirection: 'row',
        gap: '1rem',
    },

    '&:hover': {
        cursor: 'pointer',

        img: {
            border: '3px solid $almostGrey',
        },

        p: {
            textDecoration: 'underline',
        },
    },

    img: {
        display: 'block',
        width: 48,
        height: 48,
        borderRadius: '50%',
        border: '2px solid $almostGrey',
    },
});

export const MobileNavbarStyled = styled('div', {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    px: '10vw',
    py: '1rem',

    backgroundColor: '$almostWhite',
    borderBottom: '2px solid $almostGrey',
    borderTop: 'none',

    '@desktop': {
        display: 'none',
    },
});

export const MobileMenuOverlay = styled('div', {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '$almostWhite',
    zIndex: 1000,
    animation: `${slideInLeft} 0.2s ease-out`,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '15vh',
    gap: '3rem',
});

export const MobileLinks = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    textAlign: 'center',

    p: {
        cursor: 'pointer',
        fontSize: '2.5rem',

        '&:hover': {
            textDecoration: 'underline',
        },
    },
});

export const MobileMenuButton = styled('button', {
    cursor: 'pointer',
    zIndex: 1001,
    backgroundColor: 'transparent',
    border: 'none',
});

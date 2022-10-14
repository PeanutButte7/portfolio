import { styled } from 'styles';

export const NavbarStyled = styled('div', {
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    width: '100%',
    bottom: 0,
    zIndex: 1,

    flexDirection: 'row',
    justifyContent: 'space-between',
    px: '10vw',
    py: '1.2rem',

    backgroundColor: '$almostWhite',
    borderTop: '2px solid $almostGrey',

    '& p': {
        cursor: 'pointer',

        '&:hover': {
            textDecoration: 'underline',
        },
    },

    '@desktop': {
        position: 'static',
        borderBottom: '2px solid $almostGrey',
        borderTop: 'none',
        py: '1rem',
    },
});

export const RightSection = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,

    '@desktop': {
        gap: 20,
    },
});

export const NavigationText = styled('span', {
    '& svg': {
        width: 30,
        height: 30,
    },

    // Makes the icon hide on desktop and text hide on mobile
    '& > *:first-child': {
        display: 'none',
    },
    '& > *:last-child': {
        display: 'inline-block',
    },

    '@desktop': {
        '& > *:first-child': {
            display: 'inline-block',
        },
        '& > *:last-child': {
            display: 'none',
        },
    },
});

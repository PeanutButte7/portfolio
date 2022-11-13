import {styled} from 'styles';

export const NavbarStyled = styled('div', {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    px: '10vw',
    py: '1.2rem',

    backgroundColor: '$almostWhite',
    borderBottom: '2px solid $almostGrey',
    borderTop: 'none',

    '& p': {
        cursor: 'pointer',

        '&:hover': {
            textDecoration: 'underline',
        },
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

export const LeftSection = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',

    '&:hover': {
        cursor: 'pointer',

        '& img': {
            border: '3px solid $almostGrey',
        },

        '& p': {
            textDecoration: 'underline',
        }
    },

    '& img': {
        display: 'none',
    },

    '@desktop': {
        '& img': {
            display: 'block',
            width: 48,
            height: 48,
            borderRadius: '50%',
            border: '2px solid $almostGrey',
        },
    }
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

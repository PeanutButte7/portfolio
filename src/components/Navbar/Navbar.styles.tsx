import { styled } from 'styles';

export const NavbarStyled = styled('div', {
    '@mobile': {
        display: 'none',
    },

    '@desktop': {
        display: 'flex',
    },

    flexDirection: 'row',
    justifyContent: 'space-between',
    px: '10vw',
    py: '10px',

    backgroundColor: '$almostWhite',
    borderBottom: '1px solid $almostGrey',

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
    gap: 20,
});

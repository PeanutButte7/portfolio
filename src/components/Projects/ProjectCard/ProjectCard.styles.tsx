import { styled } from 'styles';

export const ProjectCardStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
    justifyContent: 'space-between',
    position: 'relative',

    transition: 'all 0.05s ease-in-out',
    border: '4px solid $colors$almostBlack',
    borderRadius: '10px',
    overflow: 'hidden',

    // Allows the cards to overflow in horizontal menu
    flex: '0 0 auto',

    '@desktop': {
        width: 560,
        gap: 20,
    },

    '&:hover': {
        top: -3,
    },

    picture: {
        objectFit: 'cover',
    },
});

export const Header = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 25,
    px: '30px',

    '@desktop': {
        height: 100,
    },
});

export const HeaderText = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    gap: 10,
    marginBottom: '1rem',

    '& > *:last-child': {
        lineHeight: '1.1rem',
    },
});

export const HeaderLink = styled('div', {
    display: 'none',

    '@desktop': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        alignSelf: 'center',
        cursor: 'pointer',

        '& p': {
            color: '$almostBlack',
            fontVariationSettings: "'wdth' 120, 'wght' 500",
            lineHeight: '32px',
        },
    },

    '&:hover': {
        '& p': {
            textDecoration: 'underline',
        },
    },
});

export const Line = styled('hr', {
    display: 'none',

    '@desktop': {
        display: 'block',
        color: '$almostGrey',
        width: '90%',
    },
});

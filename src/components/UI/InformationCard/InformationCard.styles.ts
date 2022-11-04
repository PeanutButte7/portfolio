import {styled} from 'styles';

export const InformationCardStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    px: '1.2rem',
    py: '3vh',

    border: '4px solid $almostBlack',
    borderRadius: '10px',

    'p:first-child': {
        textAlign: 'center',
    },

    '@desktop': {
        minWidth: '20rem',
        minHeight: '30rem',
        px: '1.5vw',
    },
});

export const Line = styled('hr', {
    color: '$almostGrey',
    my: '0.6rem',

    '@desktop': {
        my: '1rem',
    },
});

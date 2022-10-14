import { styled } from 'styles';

export const AboutCardStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minWidth: '20rem',
    minHeight: '30rem',

    px: '1.5vw',
    py: '3vh',

    border: '4px solid $almostBlack',
    borderRadius: '10px',

    'p:first-child': {
        textAlign: 'center',
    },
});

export const Line = styled('hr', {
    color: '$almostGrey',
    width: '90%',
    my: '1rem',
});

import { styled } from 'styles';

export const AboutCardGroup = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',

    '@desktop': {
        flexDirection: 'row',
    },
});

export const AboutPageStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',

    '@desktop': {
        '& > p': {
            width: '60vw',
        },
    },
});

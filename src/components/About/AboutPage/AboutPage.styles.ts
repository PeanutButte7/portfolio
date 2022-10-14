import { styled } from 'styles';

export const AboutCardGroup = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
});

export const AboutPageStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',

    '& > p': {
        width: '60vw',
    },
});

import {styled} from 'styles';
import {slideInBottom} from 'styles/animations';

export const AboutCardGroup = styled('div', {
    animation: `${slideInBottom} 0.3s ease-out`,
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
});

export const Description = styled('div', {
    animation: `${slideInBottom} 0.3s ease-out`,
    '& > img': {
        float: 'left',
        marginRight: '1.5rem',

        width: 100,
        height: 100,
        borderRadius: '20%',
        color: '$almostGrey',
        border: '4px solid $almostBlack',
    },

    '@desktop': {
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',

        '& > img': {
            float: 'none',
            marginRight: '0',
        },

        '& > p': {
            width: '60vw',
        },
    },
});
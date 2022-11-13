import {styled} from 'styles';
import {slideInLeft} from 'styles/animations';

export const HomeStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    marginTop: '10vh',
    mx: '10vw',

    '@desktopXL': {
        marginLeft: '20vw',
    },

    '@desktop': {
        gap: 32,
        marginTop: '20vh',
    },
});

export const ButtonRow = styled('div', {
    animation: `${slideInLeft} 1s ease-out`,
    display: 'flex',
    gap: 15,
    flexDirection: 'column',

    '@desktop': {
        flexDirection: 'row',
        alignItems: 'center',

        p: {
            fontSize: '$xl',
        },
    },
});

export const Name = styled('h4', {
    animation: `${slideInLeft} 0.7s ease-out`,
    color: '$highContrastText',
    fontFamily: '$robotoFlex',
    fontVariationSettings: '\'wdth\' 150, \'wght\' 500',
    fontSize: '$lg',
    marginBottom: '1rem',

    '@desktop': {
        fontSize: 32,
    },

    '@desktopXL': {
        fontSize: 42,
    },
});

export const Headline = styled('h1', {
    animation: `${slideInLeft} 0.7s ease-out`,
    color: '$highContrastText',
    fontFamily: '$robotoFlex',
    fontVariationSettings: '\'wdth\' 145, \'wght\' 1000, \'opsz\' 100',
    lineHeight: 1.3,
    fontSize: 38,
    marginLeft: '-20vw',
    paddingLeft: '20vw',
    py: '10px',

    backgroundImage: 'url(/assets/HomePattern.svg)',
    backgroundRepeat: 'repeat',
    backgroundSize: '700px, 700px',

    '@mobileXL': {
        fontSize: 42,
    },

    '@desktop': {
        fontSize: 72,
    },

    '@desktopXL': {
        fontSize: 86,
    },
});

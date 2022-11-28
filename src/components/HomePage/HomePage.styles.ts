import {styled} from 'styles';
import {slideInLeft} from 'styles/animations';

export const HomeStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    paddingTop: '10vh',
    mx: '10vw',

    '@desktopXL': {
        marginLeft: '20vw',
    },

    '@desktop': {
        gap: 32,
        paddingTop: '30vh',
    },
});

export const ButtonRow = styled('div', {
    animation: `${slideInLeft} 1s ease-out`,
    display: 'flex',
    gap: 15,
    flexDirection: 'column',
    p: {
        fontSize: '$lg',
    },

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
        fontSize: 40,
    },

    '@desktop': {
        fontSize: 72,
        br: {
            display: 'none',
        }
    },

    '@desktopXL': {
        fontSize: 86,
        br: {
            display: 'none',
        }
    },
});

export const Line = styled('div', {
    borderBottom: '2px solid $almostGrey',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '0.2rem',

    '@desktop': {
        // Cleans mobile line
        borderBottom: 'none',
        width: 0,
        marginRight: 0,

        // Adds desktop line
        borderLeft: '2px solid $almostGrey',
        height: '2.5rem',
        marginTop: '0.2rem',
        marginLeft: '0.3rem',
    },
});
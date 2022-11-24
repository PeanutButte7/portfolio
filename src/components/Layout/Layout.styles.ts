import {styled} from 'styles';
import {fadeIn} from '../../styles/animations';

export const LayoutStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '$lightTurquoise',
    minHeight: '100vh',
    paddingBottom: '2rem',

    '& > p': {
        animation: `${fadeIn} 0.5s ease-in-out`,
        paddingLeft: '10vw',
        paddingTop: '1rem',
        marginBottom: '2rem',
        backgroundImage: 'url(/assets/HomePattern.svg)',
        backgroundRepeat: 'repeat',
        backgroundSize: '700px, 700px',
    },

    variants: {
        noMargin: {
            false: {
                '& main': {
                    mx: '10vw',
                },
            },
        },
    },
    defaultVariants: {
        noMargin: false,
    },
});

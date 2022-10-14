import { styled } from 'styles';

export const LayoutStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '$lightTurquoise',
    height: '100%',

    '& > p': {
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

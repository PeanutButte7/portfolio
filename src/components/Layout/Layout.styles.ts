import { styled } from 'styles';

export const LayoutStyled = styled('div', {
    backgroundColor: '$myRed',
    mx: '10vw',

    '@desktopXL': {
        marginLeft: '20vw',
    },
});

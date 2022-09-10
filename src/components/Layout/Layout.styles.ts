import { styled } from 'styles';

export const LayoutStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,

    '& main': {
        mx: '10vw',

        '@desktopXL': {
            marginLeft: '20vw',
        },
    },
});

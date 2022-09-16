import { styled } from 'styles';

export const LayoutStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    backgroundColor: '$lightTurquoise',
    height: '100%',

    '& > p': {
        marginLeft: '10vw',
    },
});

import {styled} from 'styles';

export const ContactPageStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',

    '@desktop': {
        flexDirection: 'row',
        '& > p': {
            width: '60vw',
        },
    },
});

import {styled} from 'styles';
import {slideInBottom} from '../../styles/animations';

export const ContactPageStyled = styled('div', {
    animation: `${slideInBottom} 0.3s ease-out`,
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


export const IconLinks = styled('div', {
    '& > p': {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        cursor: 'pointer',

        '&:hover': {
            textDecoration: 'underline',
        },

        '& > svg': {
            strokeWidth: '0.15rem',
        }
    }
});
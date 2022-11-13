import {keyframes} from '@stitches/react';

export const slideInBottom = keyframes({
    '0%': {
        transform: 'translateY(50%)',
        opacity: 0,
    },
    '50%': {
        opacity: 0.5,
    },
    '100%': {
        transform: 'translateY(0)',
        opacity: 1,
    }
});

export const slideInLeft = keyframes({
    '0%': {
        transform: 'translateX(-100%)',
        opacity: 0,
    },
    '30%': {
        opacity: 0.5,
    },
    '100%': {
        transform: 'translateX(0)',
    }
});

export const fadeIn = keyframes({
    '0%': {
        opacity: 0,
    },
    '100%': {
        opacity: 1,
    }
});
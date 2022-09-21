import { styled } from 'styles';

export const Typography = styled('p', {
    fontFamily: '$robotoFlex',

    variants: {
        size: {
            sm: {
                fontSize: '$sm',
            },
            md: {
                fontSize: '$sm',

                '@desktop': {
                    fontSize: '$md',
                },
            },
            lg: {
                fontSize: '$md',

                '@desktop': {
                    fontSize: '$lg',
                },
            },
            xl: {
                fontSize: '$lg',

                '@desktop': {
                    fontSize: '$xl',
                },
            },
            xxl: {
                fontSize: '40px',

                '@desktop': {
                    fontSize: '$xxl',
                },
            },
        },
        type: {
            h1: {
                color: '$highContrastText',
                fontVariationSettings: "'wdth' 145, 'wght' 1000, 'opsz' 100",
            },
            h2: {
                color: '$highContrastText',
                fontVariationSettings: "'wdth' 145, 'wght' 1000",
            },
            h3: {
                color: '$highContrastText',
                fontVariationSettings: "'wdth' 120, 'wght' 600",
            },
            paragraph: {
                color: '$lowContrastText',
                fontVariationSettings: "'wdth' 120, 'wght' 400",
            },
        },
    },

    defaultVariants: {
        size: 'sm',
        type: 'paragraph',
    },
});

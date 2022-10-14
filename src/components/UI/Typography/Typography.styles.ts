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
                fontSize: '$xl',

                '@desktop': {
                    fontSize: '$xxl',
                },
            },
            xxxl: {
                fontSize: '40px',

                '@desktop': {
                    fontSize: '$xxxl',
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
                fontVariationSettings: "'wdth' 145, 'wght' 600",
            },
            paragraph: {
                color: '$lowContrastText',
                fontVariationSettings: "'wdth' 120, 'wght' 400",
            },
            skill: {
                color: '$highContrastText',
                fontVariationSettings: "'wdth' 150",
            },
        },
    },

    defaultVariants: {
        size: 'sm',
        type: 'paragraph',
    },
});

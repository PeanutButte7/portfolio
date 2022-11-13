import {createStitches} from '@stitches/react';

export type {VariantProps} from '@stitches/react';

export const {styled, css, getCssText, config} = createStitches({
    media: {
        mobile: '(min-width: 300px)', // Iphone SE
        mobileXL: '(min-width:  376px)', // Iphone X, Iphone 8
        desktop: '(min-width: 1024px)', // FullHD
        desktopXL: '(min-width: 1921px)', // 2K, 4K
    },
    theme: {
        colors: {
            // Colors
            almostBlack: '#0D0D0D',
            almostGrey: '#2A2A2A',
            almostWhite: '#FFFFFE',
            lightTurquoise: '#EFF3F2',
            turquoise: '#9FE6DD',

            // Main theme
            highContrastText: '$almostBlack',
            lowContrastText: '$almostGrey',
            lightBackground: '$almostWhite',
            primary: '$turquoise',

            // Styles
            design: '#7AAAFF',
            designBackground: '#BCD4FF',
            web: '#7FB77E',
            webBackground: '#D6F8D6',
            game: '#F2917B',
            gameBackground: '#FFBFB1',
        },
        fonts: {
            robotoFlex: 'Roboto Flex, sans-serif',
        },
        fontSizes: {
            sm: '14px',
            md: '16px',
            lg: '20px',
            xl: '24px',
            xxl: '28px',
            xxxl: '64px',
        },
    },
    utils: {
        mx: (value: string) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value: string) => ({
            marginTop: value,
            marginBottom: value,
        }),
        px: (value: string) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value: string) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
    },
});

import { styled } from 'styles';

export const FilterButtonStyled = styled('button', {
    display: 'flex',
    flexShrink: 0,
    position: 'relative',

    fontFamily: '$robotoFlex',
    fontVariationSettings: "'wdth' 120, 'wght' 600",
    fontSize: '$lg',

    '& svg': {
        minWidth: 24,
        maxWidth: 32,
    },

    backgroundColor: '$almostWhite',
    boxShadow: '5px 5px 0px 0px',
    border: '3px solid $almostBlack',
    borderRadius: 8,

    px: '1.2em',
    py: '0.4em',

    '& *': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },

    '&:hover': {
        cursor: 'pointer',
        boxShadow: '2px 2px 0px 0px',
        bottom: -3,
        right: -3,
    },

    '& a': {
        color: '$highContrastText',
    },

    '@desktop': {
        fontSize: '$xl',

        '& svg': {
            width: 42,
            height: 42,
        },
    },
});

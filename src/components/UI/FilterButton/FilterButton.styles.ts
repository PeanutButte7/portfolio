import { styled } from 'styles';

export const FilterButtonStyled = styled('button', {
    position: 'relative',

    fontFamily: '$robotoFlex',
    fontVariationSettings: "'wdth' 120, 'wght' 600",
    fontSize: '$xl',

    backgroundColor: '$almostWhite',
    boxShadow: '5px 5px 0px 0px',
    border: '3px solid $almostBlack',
    borderRadius: 8,

    px: '30px',
    py: '10px',

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

    '& svg': {
        width: 42,
        height: 42,
    },

    '& a': {
        color: '$highContrastText',
    },
});

import {styled} from 'styles';

export const ButtonStyled = styled('button', {
    position: 'relative',

    fontFamily: '$robotoFlex',
    fontVariationSettings: '\'wdth\' 120, \'wght\' 600',

    boxShadow: '5px 5px 0px 0px $colors$almostBlack',
    border: '3px solid $almostBlack',
    borderRadius: 8,

    // For adding icon
    '& *': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },

    // Hover effect
    '&:hover': {
        cursor: 'pointer',
        boxShadow: '2px 2px 0px 0px $colors$almostBlack',
        bottom: -3,
        right: -3,
    },

    variants: {
        style: {
            primary: {
                backgroundColor: '$primary',
            },
            secondary: {
                backgroundColor: '$lightBackground',
            },
            noShadow: {
                boxShadow: 'none',
                backgroundColor: '$lightBackground',

                '&:hover': {
                    backgroundColor: '$lightTurquoise',
                    boxShadow: 'none',
                    bottom: 0,
                    right: 0,
                },
            },
        },
        size: {
            large: {
                px: '30px',
                py: '3px',

                a: {
                    fontSize: '$xl',
                },

                '& svg': {
                    width: 28,
                    height: 28,
                    strokeWidth: 2.5,
                },
            },
            medium: {
                px: '15px',
                py: '5px',

                a: {
                    fontSize: '$lg',
                },

                '& svg': {
                    width: 24,
                    height: 24,
                    strokeWidth: 2.5,
                },
            },
            small: {
                px: '10px',
                py: '4px',

                a: {
                    fontSize: '$md',
                },

                '& svg': {
                    width: 16,
                    height: 16,
                    strokeWidth: 2.5,
                },
            },
        },
    },
    defaultVariants: {
        style: 'primary',
        size: 'large',
    },
});

import { styled } from 'styles';

export const ProjectCardStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    paddingTop: 20,
    width: 300,

    border: '4px solid $colors$almostBlack',
    borderRadius: '10px',
    overflow: 'hidden',

    // Allows the cards to overflow in horizontal menu
    flex: '0 0 auto',

    '@desktop': {
        width: 560,
    },
});

export const Header = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 25,
    px: '30px',
    height: 100,

    '@desktop': {},
});

export const HeaderText = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    gap: 10,

    '& > *:last-child': {
        lineHeight: '17px',
    },
});

export const HeaderLink = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    alignSelf: 'center',
    cursor: 'pointer',

    '& p': {
        color: '$almostBlack',
        fontVariationSettings: "'wdth' 120, 'wght' 500",
        lineHeight: '32px',
    },
});

export const Line = styled('hr', {
    color: '$almostGrey',
    width: '90%',
});

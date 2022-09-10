import { styled } from 'styles';

export const NavbarStyled = styled('div', {
    backgroundColor: '$almostWhite',
    borderBottom: '1px solid $almostGrey',
});

export const NavbarContents = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    mx: '10vw',
    my: '10px',

    '@desktopXL': {
        marginLeft: '20vw',
    },
});

export const RightSection = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
});

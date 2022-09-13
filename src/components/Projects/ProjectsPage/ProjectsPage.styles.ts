import { styled } from 'styles';

export const ProjectsPageStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 50,
});

export const Header = styled('div', {
    mx: '10vw',
});

export const ProjectCardRow = styled('div', {
    '& > div': {
        display: 'grid',
        gridAutoFlow: 'column',
        gap: 50,
        paddingLeft: '10vw',

        overflowX: 'auto',
    },
});

export const Filters = styled('div', {
    display: 'flex',
    direction: 'row',
    gap: 20,
});

import { styled } from 'styles';

export const ProjectsPageStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 50,
});

export const ProjectCardRow = styled('div', {
    '& > div': {
        display: 'flex',
        gridAutoFlow: 'column',
        gap: 50,
        paddingLeft: '10vw',
        flexWrap: 'nowrap',

        overflowX: 'auto',
        cursor: 'grab',
    },
});

export const Filters = styled('div', {
    display: 'flex',
    direction: 'row',
    gap: 20,
    mx: '10vw',
});

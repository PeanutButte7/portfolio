import { styled } from 'styles';

export const ProjectsPageStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,

    '@desktop': {
        gap: 50,
    },
});

export const ProjectCardRow = styled('div', {
    '& > div': {
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
        px: '10vw',
        flexWrap: 'nowrap',

        overflowX: 'auto',
        cursor: 'grab',
    },

    '@desktop': {
        '& > div': {
            gap: 50,
            flexDirection: 'row',
            gridAutoFlow: 'column',
        },
    },
});

export const Filters = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    overflowX: 'auto',

    alignItems: 'flex-start',
    gap: 15,
    marginLeft: '10vw',
    paddingBottom: '1rem',

    '@desktop': {
        overflowX: 'visible',
        paddingBottom: 0,
    },

    // hide scrollbar
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    scrollbarWidth: 'none',
});

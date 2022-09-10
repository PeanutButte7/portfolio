import { Typography } from 'components/UI';
import { ProjectCard } from 'components/Projects';
import { Project } from 'pages/projects';
import {
    Filters,
    ProjectCardRow,
    ProjectsPageStyled,
} from './ProjectsPage.styles';
import { FilterButton } from '../../UI/FilterButton';
import { IconBrandAppleArcade, IconDragDrop, IconWorld } from '@tabler/icons';

interface ProjectsPageProps {
    projects: Project[];
}

export function ProjectsPage({ projects }: ProjectsPageProps) {
    const filters = [
        { name: 'Web apps', type: 'web' },
        { name: 'Designs', type: 'design' },
        { name: 'Games', type: 'game' },
    ];

    return (
        <ProjectsPageStyled>
            <Typography type='h1' size='xxl'>
                Projects_
            </Typography>
            <Filters>
                {filters.map((filter) => (
                    <FilterButton style={filter.type} key={filter.type}>
                        {filter.type == 'web' && <IconWorld />}
                        {filter.type == 'design' && <IconDragDrop />}
                        {filter.type == 'game' && <IconBrandAppleArcade />}
                        {filter.name}
                    </FilterButton>
                ))}
            </Filters>
            <ProjectCardRow>
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </ProjectCardRow>
        </ProjectsPageStyled>
    );
}

export default ProjectsPage;

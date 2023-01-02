import { ProjectCard } from 'components/Projects';
import { Project } from 'pages/projects';
import {
    Filters,
    ProjectCardRow,
    ProjectsPageStyled,
} from './ProjectsPage.styles';
import { FilterButton } from '../../UI/FilterButton';
import { IconBrandAppleArcade, IconDragDrop, IconWorld } from '@tabler/icons';
import { useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

enum Filter {
    All = 'all',
    Web = 'web',
    Design = 'design',
    Game = 'game',
}

interface ProjectsPageProps {
    projects: Project[];
}

export function ProjectsPage({ projects }: ProjectsPageProps) {
    const filters = [
        { type: Filter.Web, label: 'Web apps' },
        { type: Filter.Design, label: 'Designs' },
        { type: Filter.Game, label: 'Games' },
    ];

    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [activeFilter, setActiveFilter] = useState(Filter.All);

    function filterProjects(newFilter: Filter) {
        // Sets the active filter back to 'all' if user clicks the same filter twice
        if (newFilter === activeFilter) {
            setActiveFilter(Filter.All);
            setFilteredProjects(projects);
            return;
        }

        // Filters the projects based on the filter
        setActiveFilter(newFilter);
        const newFilteredProjects = projects.filter((project) => {
            return project.type === newFilter;
        });

        setFilteredProjects(newFilteredProjects);
    }

    return (
        <ProjectsPageStyled>
            <Filters>
                {filters.map(({ label, type }) => (
                    <FilterButton
                        accentColor={getAccentColor(type)}
                        mainColor={getMainColor(type)}
                        active={activeFilter === type}
                        key={type}
                        onClick={() => filterProjects(type)}
                    >
                        {type == Filter.Web && <IconWorld />}
                        {type == Filter.Design && <IconDragDrop />}
                        {type == Filter.Game && <IconBrandAppleArcade />}
                        {label}
                    </FilterButton>
                ))}
            </Filters>
            <ProjectCardRow>
                <ScrollContainer>
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </ScrollContainer>
            </ProjectCardRow>
        </ProjectsPageStyled>
    );
}

function getAccentColor(type: Filter) {
    switch (type) {
        case Filter.Web:
            return '$webBackground';
        case Filter.Design:
            return '$designBackground';
        case Filter.Game:
            return '$gameBackground';
    }
}

function getMainColor(type: string) {
    switch (type) {
        case Filter.Web:
            return '$web';
        case Filter.Design:
            return '$design';
        case Filter.Game:
            return '$game';
    }
}

export default ProjectsPage;

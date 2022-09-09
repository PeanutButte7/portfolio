import { ProjectsPage } from 'components/Projects';
import { GetStaticProps } from 'next';
import { getProjectsData } from '../../lib/projects';

export interface Project {
    id: string;
    title: string;
    description: string;
    link: string;
    type: string;
    image: string;
}

interface ProjectsProps {
    projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
    return <ProjectsPage projects={projects}></ProjectsPage>;
}

export const getStaticProps: GetStaticProps = async () => {
    const projects = getProjectsData();

    return {
        props: {
            projects,
        },
    };
};

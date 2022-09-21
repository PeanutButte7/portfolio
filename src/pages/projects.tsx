import { ProjectsPage } from 'components/Projects';
import { GetStaticProps } from 'next';
import { getProjectsData } from '../../lib/projects';
import { Layout } from '../components/Layout';

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
    return (
        <Layout headerText='Projects_' noMargin>
            <ProjectsPage projects={projects} />
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const projects = getProjectsData();

    return {
        props: {
            projects,
        },
    };
};

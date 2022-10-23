import { ProjectsPage } from 'components/Projects';
import { GetStaticProps } from 'next';
import { getProjectsData } from '../../lib/projects';
import { Layout } from '../components/Layout';

export interface Project {
    id: string;
    title: string;
    description: string;
    priority: number;
    link: string;
    type: string;
    image: string;
}

interface ProjectsProps {
    projects: Project[];
}

export default function Projects({projects}: ProjectsProps) {
    return (
        <Layout headerText='Projects_' noMargin>
            <ProjectsPage projects={projects}/>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const projects = getProjectsData() as Project[];

    // Sort projects by priority
    projects.sort((a, b) => {
        return b.priority - a.priority;
    });

    return {
        props: {
            projects,
        },
    };
};

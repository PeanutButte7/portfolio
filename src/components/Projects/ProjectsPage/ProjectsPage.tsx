import { Project } from 'pages/projects';

interface ProjectsPageProps {
    projects: Project[];
}

export function ProjectsPage({ projects }: ProjectsPageProps) {
    console.log(projects);
    return (
        <>
            <p>Projects</p>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>{project.title}</li>
                ))}
            </ul>
        </>
    );
}

export default ProjectsPage;

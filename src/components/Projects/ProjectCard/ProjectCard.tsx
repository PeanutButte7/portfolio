import {Typography} from 'components/UI';
import {Project} from 'pages/projects';
import {Header, HeaderLink, HeaderText, Line, ProjectCardStyled,} from './ProjectCard.styles';
import {IconExternalLink} from '@tabler/icons';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({project}: ProjectCardProps) {
    return (
        <ProjectCardStyled
            css={{backgroundColor: getCardColor(project.type)}}
        >
            <Header>
                <HeaderText>
                    <Typography type="h2" size="xxl">
                        {project.title}
                    </Typography>
                    <Typography type="paragraph" size="sm">
                        {project.description}
                    </Typography>
                </HeaderText>
                {project.link && (
                    <HeaderLink
                        onClick={() => window.open(project.link, '_blank')}
                    >
                        <IconExternalLink/>
                        <Typography type="paragraph" size="xxl">
                            Learn
                            <br/>
                            more
                        </Typography>
                    </HeaderLink>
                )}
            </Header>
            <Line/>
            <picture>
                <source srcSet={project.image}/>
                <img src={project.image} alt={project.title}/>
            </picture>
        </ProjectCardStyled>
    );
}

function getCardColor(type: string) {
    switch (type) {
        case 'web':
            return '$webBackground';
        case 'design':
            return '$designBackground';
        case 'school':
            return '$gameBackground';
    }
}

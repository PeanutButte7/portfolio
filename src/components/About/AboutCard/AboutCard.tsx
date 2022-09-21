import { Typography } from 'components/UI';
import { Line } from '../../Projects/ProjectCard/ProjectCard.styles';

interface AboutCardProps {
    title: string;
    skills: string[];
}

export function AboutCard({ title, skills }: AboutCardProps) {
    return (
        <>
            <Typography type='h2'>{title}</Typography>
            <Line />
            {skills.map((skill) => (
                <Typography size='md'>{skill}</Typography>
            ))}
        </>
    );
}

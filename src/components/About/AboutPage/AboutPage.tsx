import { Typography } from 'components/UI';
import { SkillGroup } from 'pages/about';
import { AboutCard } from 'components/About';

interface AboutPageProps {
    skillGroups: SkillGroup[];
}

export function AboutPage({ skillGroups }: AboutPageProps) {
    return (
        <>
            <Typography size='md'>
                Hi! I'm Adam, a front-end web developer with a passion for UI
                and UX design. When I'm not coding I spend my time working as a
                journalist for a Czech gaming medium
                <a href='components/About/AboutPage/AboutPage' target='_blank'>
                    {' '}
                    IndianTVCZ
                </a>
                . And lastly, I of course love to waste my time playing video
                games.
            </Typography>
            {skillGroups.map(({ title, skills }) => (
                <AboutCard title={title} skills={skills} />
            ))}
        </>
    );
}

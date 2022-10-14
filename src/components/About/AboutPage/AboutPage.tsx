import { Typography } from 'components/UI';
import { SkillGroup } from 'pages/about';
import { AboutCard } from 'components/About';
import { AboutCardGroup, AboutPageStyled } from './AboutPage.styles';

interface AboutPageProps {
    skillGroups: SkillGroup[];
}

export function AboutPage({ skillGroups }: AboutPageProps) {
    return (
        <AboutPageStyled>
            <Typography size='lg'>
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
            <AboutCardGroup>
                <AboutCard
                    title={skillGroups[2].title}
                    skills={skillGroups[2].skills}
                    mainColor='$webBackground'
                    accentColor='$web'
                />
                <AboutCard
                    title={skillGroups[0].title}
                    skills={skillGroups[0].skills}
                    mainColor='$designBackground'
                    accentColor='$design'
                />
                <AboutCard
                    title={skillGroups[1].title}
                    skills={skillGroups[1].skills}
                />
            </AboutCardGroup>
        </AboutPageStyled>
    );
}

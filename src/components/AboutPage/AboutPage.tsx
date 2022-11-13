import {InformationCard, Typography} from 'components/UI';
import {SkillGroup} from 'pages/about';
import {AboutCardGroup, AboutPageStyled} from './AboutPage.styles';

interface AboutPageProps {
    skillGroups: SkillGroup[];
}

export function AboutPage({skillGroups}: AboutPageProps) {
    return (
        <AboutPageStyled>
            <Typography size="lg">
                Hi! I'm Adam, a front-end web developer with a passion for UI
                and UX design. When I'm not coding I spend my time working as a
                journalist for a Czech gaming medium
                <a href="components/AboutPage/AboutPage" target="_blank">
                    {' '}
                    IndianTVCZ
                </a>
                . And lastly, I of course love to waste my time playing video
                games.
            </Typography>
            <AboutCardGroup>
                {skillGroups.map(({title, skills}, groupIndex) => (
                    <InformationCard title={title} key={groupIndex}>
                        {skills.map((skill, skillIndex) => (
                            <Typography size="lg" type="skill" key={skillIndex}>
                                # {skill}
                            </Typography>
                        ))}
                    </InformationCard>
                ))}
            </AboutCardGroup>
        </AboutPageStyled>
    );
}

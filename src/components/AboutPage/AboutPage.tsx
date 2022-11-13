import {InformationCard, Typography} from 'components/UI';
import {AboutCardGroup, AboutPageStyled} from './AboutPage.styles';
import skillGroups from './skillGroups.json';

export function AboutPage() {

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
                {skillGroups.map(({title, skills, mainColor, accentColor}, groupIndex) => (
                    <InformationCard title={title} key={groupIndex} mainColor={mainColor} accentColor={accentColor}>
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

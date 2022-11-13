import {InformationCard, Typography} from 'components/UI';
import {AboutCardGroup, AboutPageStyled, Description} from './AboutPage.styles';
import skillGroups from './skillGroups.json';

export function AboutPage() {

    return (
        <AboutPageStyled>
            <Description>
                <picture>
                    <source srcSet="/img/headshot.jpg" type="image/jpg"/>
                    <img src="/img/headshot.jpg" alt="Adam Bárta"/>
                </picture>
                <Typography size="lg">
                    Hi! I&apos;m Adam, a front-end web developer with a passion for UI
                    and UX design. When I&apos;m not coding I spend my time working as a
                    journalist for a Czech gaming medium
                    <a href="components/AboutPage/AboutPage" target="_blank">
                        {' '}
                        IndianTVCZ
                    </a>
                    . And lastly, I of course love to waste my time playing video
                    games.
                </Typography>
            </Description>
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

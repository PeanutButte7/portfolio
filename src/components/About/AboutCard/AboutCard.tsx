import { Typography } from 'components/UI';
import { AboutCardStyled, Line } from './AboutCard.styles';

interface AboutCardProps {
    title: string;
    skills: string[];
    mainColor?: string;
    accentColor?: string;
}

export function AboutCard({
    title,
    skills,
    mainColor = '$almostWhite',
    accentColor = '$almostGrey',
}: AboutCardProps) {
    return (
        <AboutCardStyled
            css={{
                color: accentColor,
                backgroundColor: mainColor,
                svg: { color: accentColor },
                boxShadow: '5px 5px 0px 0px',
            }}
        >
            <div>
                <Typography type='h2' size='xxl'>
                    {title}
                </Typography>
                <Line />
                {skills.map((skill) => (
                    <Typography size='lg' type='skill'>
                        # {skill}
                    </Typography>
                ))}
            </div>
            {/*Add button when filter functionality is added*/}
            {/*<Button style='noShadow' size='medium'>*/}
            {/*    View projects*/}
            {/*</Button>*/}
        </AboutCardStyled>
    );
}

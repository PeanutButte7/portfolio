import { IconExternalLink } from '@tabler/icons';
import { ButtonRow, Headline, HomeStyled, Name } from './HomePage.styles';
import { Button, Typography } from 'components/UI';
import Link from 'next/link';

export function HomePage() {
    return (
        <HomeStyled>
            <Name>Adam Bárta</Name>
            <Headline>Let’s get to the point_</Headline>
            <ButtonRow>
                <Typography size='lg' type='h3'>
                    See my:
                </Typography>
                <Link href='projects' passHref>
                    <Button>Projects</Button>
                </Link>
                <Button style='secondary'>Skills</Button>
                <Button style='secondary'>Journey</Button>
                <Button
                    style='secondary'
                    href='https://github.com/PeanutButte7'
                >
                    Github
                    <IconExternalLink />
                </Button>
            </ButtonRow>
        </HomeStyled>
    );
}

import { IconExternalLink } from '@tabler/icons';
import { ButtonRow, Headline, HomeStyled, Name } from './HomePage.styles';
import { Button, Typography } from 'components/UI';
import Link from 'next/link';

export function HomePage() {
    return (
        <HomeStyled>
            <Name>Adam Bárta</Name>
            <Headline>Developer, designer, writer_</Headline>
            <ButtonRow>
                <Typography size='lg' type='h3'>
                    Go to:
                </Typography>
                <Link href='projects' passHref>
                    <Button>Projects</Button>
                </Link>
                <Link href='about' passHref>
                    <Button style='secondary'>About me</Button>
                </Link>
                <Link href='contact' passHref>
                    <Button style='secondary'>Contact</Button>
                </Link>
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

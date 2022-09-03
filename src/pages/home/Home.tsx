import { Button } from '../../components/UI/Button/Button';
import { IconExternalLink } from '@tabler/icons';
import { ButtonRow, Headline, HomeStyled, Name } from './Home.styles';
import { Typography } from 'components/UI';

export default function Home() {
    return (
        <HomeStyled>
            <Name>Adam Bárta</Name>
            <Headline className='headline'>Let’s get to the point_</Headline>
            <ButtonRow>
                <Typography size='lg' type='h3'>
                    See my:
                </Typography>
                <Button
                    size={{
                        '@initial': 'large',
                        '@mobile': 'small',
                        '@mobileXL': 'medium',
                    }}
                >
                    Projects
                </Button>
                <Button
                    size={{
                        '@initial': 'large',
                        '@mobile': 'small',
                        '@mobileXL': 'medium',
                    }}
                    style='secondary'
                >
                    Skills
                </Button>
                <Button
                    size={{
                        '@initial': 'large',
                        '@mobile': 'small',
                        '@mobileXL': 'medium',
                    }}
                    style='secondary'
                >
                    Journey
                </Button>
                <Button
                    size={{
                        '@initial': 'large',
                        '@mobile': 'small',
                        '@mobileXL': 'medium',
                    }}
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

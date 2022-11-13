import {InformationCard, Typography} from 'components/UI';
import {ContactPageStyled, IconLinks} from './ContactPage.styled';
import {IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconPokeball} from '@tabler/icons';

export function ContactPage() {
    return (
        <ContactPageStyled>
            <InformationCard title="Email" tight>
                <Typography size="lg">
                    The best way to reach me is through my email. <br/>
                    <b>adam.barta404@gmail.com</b>
                </Typography>
            </InformationCard>
            <InformationCard title="Socials" tight>
                <IconLinks>
                    <Typography size="lg"
                                onClick={() => window.open('https://github.com/PeanutButte7', '_blank')}><IconBrandGithub/>
                        View my projects on Github</Typography>
                    <Typography size="lg"
                                onClick={() => window.open('https://www.linkedin.com/in/adam-b%C3%A1rta/', '_blank')}><IconBrandLinkedin/>
                        Add me on LinkedIn</Typography>
                    <Typography size="lg"
                                onClick={() => window.open('https://twitter.com/AdamBartas', '_blank')}><IconBrandTwitter/>
                        Follow me on Twitter</Typography>
                    <Typography size="lg"
                                onClick={() => window.open('https://opencritic.com/critic/7087/adam-b-rta', '_blank')}><IconPokeball/>
                        See my reviews on OpenCritic</Typography>
                </IconLinks>
            </InformationCard>
        </ContactPageStyled>
    );
}
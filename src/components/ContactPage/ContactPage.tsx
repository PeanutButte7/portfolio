import {InformationCard, Typography} from 'components/UI';
import {ContactPageStyled} from './ContactPage.styled';
import {IconBrandGithub} from '@tabler/icons';

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
                <Typography size="lg"><IconBrandGithub/>View my projects on Github</Typography>
            </InformationCard>
        </ContactPageStyled>
    );
}

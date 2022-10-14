import { Typography } from 'components/UI';
import { NavbarStyled, NavigationText, RightSection } from './Navbar.styles';
import Link from 'next/link';
import { IconBook2, IconBrush, IconPhone } from '@tabler/icons';

export function Navbar() {
    return (
        <>
            <NavbarStyled>
                <Link href='/' passHref>
                    <Typography type='h3' size='xxl'>
                        Adam Bárta
                    </Typography>
                </Link>
                <RightSection>
                    <Link href='projects' passHref>
                        <NavigationText>
                            <Typography type='h3' size='xxl'>
                                Projects
                            </Typography>
                            <IconBrush />
                        </NavigationText>
                    </Link>
                    <Link href='about' passHref>
                        <NavigationText>
                            <Typography type='h3' size='xxl'>
                                About me
                            </Typography>
                            <IconBook2 />
                        </NavigationText>
                    </Link>
                    <Link href='contact' passHref>
                        <NavigationText>
                            <Typography type='h3' size='xxl'>
                                Contact
                            </Typography>
                            <IconPhone />
                        </NavigationText>
                    </Link>
                </RightSection>
            </NavbarStyled>
        </>
    );
}

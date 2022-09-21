import { Typography } from 'components/UI';
import { NavbarStyled, RightSection } from './Navbar.styles';
import Link from 'next/link';

export function Navbar() {
    return (
        <NavbarStyled>
            <Link href='/' passHref>
                <Typography type='h3' size='xl'>
                    Adam Bárta
                </Typography>
            </Link>
            <RightSection>
                <Link href='projects' passHref>
                    <Typography type='h3' size='xl'>
                        Projects
                    </Typography>
                </Link>

                <Link href='about' passHref>
                    <Typography type='h3' size='xl'>
                        About me
                    </Typography>
                </Link>
                <Link href='contact' passHref>
                    <Typography type='h3' size='xl'>
                        Contact
                    </Typography>
                </Link>
            </RightSection>
        </NavbarStyled>
    );
}

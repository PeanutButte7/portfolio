import { Typography } from 'components/UI';
import { NavbarStyled, RightSection } from './Navbar.styles';
import Link from 'next/link';

export function Navbar() {
    return (
        <NavbarStyled>
            <Link href='/' passHref>
                <Typography type='h3' size='xxl'>
                    Adam Bárta
                </Typography>
            </Link>
            <RightSection>
                <Link href='projects' passHref>
                    <Typography type='h3' size='xxl'>
                        Projects
                    </Typography>
                </Link>

                <Link href='about' passHref>
                    <Typography type='h3' size='xxl'>
                        About me
                    </Typography>
                </Link>
                <Link href='contact' passHref>
                    <Typography type='h3' size='xxl'>
                        Contact
                    </Typography>
                </Link>
            </RightSection>
        </NavbarStyled>
    );
}

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
                <Typography type='h3' size='xl'>
                    Projects
                </Typography>
                <Typography type='h3' size='xl'>
                    Skills
                </Typography>
                <Typography type='h3' size='xl'>
                    About me
                </Typography>
                <Typography type='h3' size='xl'>
                    Contact
                </Typography>
            </RightSection>
        </NavbarStyled>
    );
}

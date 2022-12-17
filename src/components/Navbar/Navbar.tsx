import { Typography } from 'components/UI';
import {
    DesktopNavbarStyled,
    ImageSection,
    MobileLinks,
    MobileMenuButton,
    MobileMenuOverlay,
    MobileNavbarStyled,
    RightSection,
} from './Navbar.styles';
import Link from 'next/link';
import { IconMenu, IconX } from '@tabler/icons';
import { useState } from 'react';
import { useRouter } from 'next/router';

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    function closeMenu(newRoute: string) {
        // check if the current route is the same as the one we are navigating to
        // if so, close the mobile menu
        console.log(router.pathname, newRoute);
        if (router.pathname === newRoute) {
            setIsMobileMenuOpen(false);
        }
    }

    return (
        <>
            <DesktopNavbarStyled>
                <Link href='/' passHref>
                    <ImageSection>
                        <picture>
                            <source
                                srcSet='/img/headshot.jpg'
                                type='image/jpg'
                            />
                            <img src='/img/headshot.jpg' alt='Adam Bárta' />
                        </picture>
                        <Typography type='h3' size='xxl'>
                            Adam Bárta
                        </Typography>
                    </ImageSection>
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
            </DesktopNavbarStyled>
            <MobileNavbarStyled>
                <Link href='/' passHref>
                    <Typography type='h3' size='xl'>
                        Adam Bárta
                    </Typography>
                </Link>
                <MobileMenuButton
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <IconX /> : <IconMenu />}
                </MobileMenuButton>
                {isMobileMenuOpen && (
                    <MobileMenuOverlay>
                        <Link href='/' passHref>
                            <ImageSection>
                                <picture>
                                    <source
                                        srcSet='/img/headshot.jpg'
                                        type='image/jpg'
                                    />
                                    <img
                                        src='/img/headshot.jpg'
                                        alt='Adam Bárta'
                                    />
                                </picture>
                                <Typography type='h3' size='xxl'>
                                    Adam Bárta
                                </Typography>
                            </ImageSection>
                        </Link>
                        <MobileLinks>
                            <Link href='projects' passHref>
                                <Typography
                                    type='h3'
                                    onClick={() => closeMenu('/projects')}
                                >
                                    Projects
                                </Typography>
                            </Link>
                            <Link href='about' passHref>
                                <Typography
                                    type='h3'
                                    onClick={() => closeMenu('/about')}
                                >
                                    About me
                                </Typography>
                            </Link>
                            <Link href='contact' passHref>
                                <Typography
                                    type='h3'
                                    onClick={() => closeMenu('/contact')}
                                >
                                    Contact
                                </Typography>
                            </Link>
                        </MobileLinks>
                    </MobileMenuOverlay>
                )}
            </MobileNavbarStyled>
        </>
    );
}

import { ReactNode } from 'react';
import { LayoutStyled } from './Layout.styles';
import { Navbar } from '../Navbar';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <LayoutStyled>
            <Navbar></Navbar>
            <main>{children}</main>
        </LayoutStyled>
    );
}

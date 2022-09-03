import { ReactNode } from 'react';
import { LayoutStyled } from './Layout.styles';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <LayoutStyled>
            <main>{children}</main>
        </LayoutStyled>
    );
}

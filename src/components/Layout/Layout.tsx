import { ReactNode } from 'react';
import { LayoutStyled } from './Layout.styles';
import { Navbar } from '../Navbar';
import { Typography } from 'components/UI';

interface LayoutProps {
    children: ReactNode;
    headerText?: string;
}

export function Layout({ children, headerText }: LayoutProps) {
    return (
        <LayoutStyled>
            <Navbar></Navbar>
            {headerText && (
                <Typography type='h1' size='xxl'>
                    {headerText}
                </Typography>
            )}
            <main>{children}</main>
        </LayoutStyled>
    );
}

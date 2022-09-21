import { ReactNode } from 'react';
import { LayoutStyled } from './Layout.styles';
import { Navbar } from '../Navbar';
import { Typography } from 'components/UI';

interface LayoutProps {
    children: ReactNode;
    headerText?: string;
    noMargin?: boolean;
}

export function Layout({ children, headerText, noMargin }: LayoutProps) {
    return (
        <LayoutStyled noMargin={noMargin}>
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

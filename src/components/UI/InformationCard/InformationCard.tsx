import {Typography} from '../Typography';
import {InformationCardStyled, Line} from './InformationCard.styles';
import type {ReactNode} from 'react';

interface InformationCardProps {
    title: string;
    children?: ReactNode;
    mainColor?: string;
    accentColor?: string;
    tight?: boolean;
}

export function InformationCard({
                                    title,
                                    children,
                                    mainColor = '$almostWhite',
                                    accentColor = '$almostGrey',
                                    tight
                                }: InformationCardProps) {
    return (
        <InformationCardStyled
            tight={tight}
            css={{
                color: accentColor,
                backgroundColor: mainColor,
                svg: {color: accentColor},
                boxShadow: '5px 5px 0px 0px',
            }}
        >
            <div>
                <Typography type="h2" size="xxl">
                    {title}
                </Typography>
                <Line/>
                <span>{children}</span>
            </div>
            {/*Add button when filter functionality is added*/}
            {/*<Button style='noShadow' size='medium'>*/}
            {/*    View projects*/}
            {/*</Button>*/}
        </InformationCardStyled>
    );
}

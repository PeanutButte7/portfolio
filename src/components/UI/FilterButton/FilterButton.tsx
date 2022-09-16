import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { VariantProps } from 'styles';
import { FilterButtonStyled } from './FilterButton.styles';

type NativeButtonAttributes = Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'onClick' | 'form' | 'type' | 'disabled'
>;

type ButtonRef = HTMLButtonElement | null;

export interface FilterButtonProps
    extends VariantProps<typeof FilterButtonStyled>,
        NativeButtonAttributes {
    children: ReactNode;
    accentColor?: string;
    mainColor?: string;
    active?: boolean;
}

export const FilterButton = forwardRef<ButtonRef, FilterButtonProps>(
    (
        {
            children,
            type,
            accentColor,
            mainColor,
            active,
            ...props
        }: FilterButtonProps,
        ref
    ) => {
        return (
            <FilterButtonStyled
                ref={ref}
                type={type}
                {...props}
                css={{
                    color: active ? mainColor : accentColor,
                    svg: { color: mainColor ? mainColor : '$almostBlack' },
                    boxShadow: active ? '2px 2px 0px 0px' : '5px 5px 0px 0px',
                    bottom: active ? -3 : 0,
                    right: active ? -3 : 0,
                }}
            >
                <a type='button'>{children}</a>
            </FilterButtonStyled>
        );
    }
);
FilterButton.displayName = 'FilterButton';

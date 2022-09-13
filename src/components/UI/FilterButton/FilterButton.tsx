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
}

export const FilterButton = forwardRef<ButtonRef, FilterButtonProps>(
    (
        { children, type, accentColor, mainColor, ...props }: FilterButtonProps,
        ref
    ) => {
        return (
            <FilterButtonStyled
                ref={ref}
                type={type}
                {...props}
                css={{
                    color: accentColor ? accentColor : '$almostBlack',
                    svg: { color: mainColor ? mainColor : '$almostBlack' },
                }}
            >
                <a type='button'>{children}</a>
            </FilterButtonStyled>
        );
    }
);
FilterButton.displayName = 'FilterButton';

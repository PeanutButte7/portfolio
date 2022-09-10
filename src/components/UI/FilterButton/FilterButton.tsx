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
    style: string;
}

export const FilterButton = forwardRef<ButtonRef, FilterButtonProps>(
    ({ children, type, style, ...props }: FilterButtonProps, ref) => {
        return (
            <FilterButtonStyled
                ref={ref}
                type={type}
                {...props}
                css={{
                    color: getAccentColor(style),
                    svg: { color: getMainColor(style) },
                }}
            >
                <a type='button'>{children}</a>
            </FilterButtonStyled>
        );
    }
);
FilterButton.displayName = 'FilterButton';

function getAccentColor(type: string) {
    switch (type) {
        case 'web':
            return '$webBackground';
        case 'design':
            return '$designBackground';
        case 'game':
            return '$gameBackground';
    }
}

function getMainColor(type: string) {
    switch (type) {
        case 'web':
            return '$web';
        case 'design':
            return '$design';
        case 'game':
            return '$game';
    }
}

import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { VariantProps } from 'styles';
import { ButtonStyled } from './Button.styles';

type NativeButtonAttributes = Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'onClick' | 'form' | 'type' | 'disabled'
>;

type ButtonRef = HTMLButtonElement | null;

export interface ButtonProps
    extends VariantProps<typeof ButtonStyled>,
        NativeButtonAttributes {
    children: ReactNode;
    href?: string;
}

export const Button = forwardRef<ButtonRef, ButtonProps>(
    ({ children, type, style, size, href, ...props }: ButtonProps, ref) => {
        return (
            <ButtonStyled
                ref={ref}
                type={type}
                size={
                    size
                        ? size
                        : {
                              '@initial': 'large',
                              '@mobile': 'small',
                              '@mobileXL': 'medium',
                          }
                }
                style={style}
                {...props}
            >
                <a type='button' href={href}>
                    {children}
                </a>
            </ButtonStyled>
        );
    }
);
Button.displayName = 'Button';
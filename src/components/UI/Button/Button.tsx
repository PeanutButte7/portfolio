import type {ButtonHTMLAttributes, ReactNode} from 'react';
import {forwardRef} from 'react';
import type {VariantProps} from 'styles';
import {ButtonStyled} from './Button.styles';

type NativeButtonAttributes = Pick<ButtonHTMLAttributes<HTMLButtonElement>,
    'onClick' | 'form' | 'type' | 'disabled'>;

type ButtonRef = HTMLButtonElement | null;

export interface ButtonProps
    extends VariantProps<typeof ButtonStyled>,
        NativeButtonAttributes {
    children: ReactNode;
    href?: string;
    external?: boolean;
    css?: any;
}

export const Button = forwardRef<ButtonRef, ButtonProps>(
    ({children, type, style, size, href, external, css, ...props}: ButtonProps, ref) => {
        return (
            <ButtonStyled
                css={css}
                ref={ref}
                type={type}
                size={
                    size
                        ? size
                        : {
                            '@initial': 'large',
                            '@mobile': 'medium',
                            '@desktop': 'large',
                        }
                }
                style={style}
                {...props}
            >
                <a type="button" href={href} target={external ? '_blank' : '_self'} rel="noreferrer">
                    {children}
                </a>
            </ButtonStyled>
        );
    }
);
Button.displayName = 'Button';

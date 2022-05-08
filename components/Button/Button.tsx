import React from 'react';
import {ButtonProps} from "./Button.props";
import style from './Button.module.css';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';


export const Button = ({variant, arrow = 'none', children, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(style.button, className, {
            [style.primary]: variant === 'primary',
            [style.ghost]: variant === 'ghost',
        })}
            {...props}
        >
            {children}
            {
                arrow !== 'none' &&
              <span
                className={cn(style.arrow, {
                    [style.down]: arrow === 'down',
                    [style.right]: arrow === 'right'
                })}
              ><ArrowIcon />
              </span>
            }

        </button>
    );
};



import React from 'react';
import {PProps} from "./P.props";
import style from './P.module.css';
import cn from 'classnames';



export const P = ({variant = 'm', children, className, ...props}: PProps): JSX.Element => {
    return (
        <p
            className={cn(style.p, className, {
                [style.s]: variant === 's',
                [style.m]: variant === 'm',
                [style.l]: variant === 'l',
            })}
            {...props}
        >
            {children}
        </p>
    );
};

export default P;
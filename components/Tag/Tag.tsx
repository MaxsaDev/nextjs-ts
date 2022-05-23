import React from 'react';
import {TagProps} from "./Tag.props";
import style from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({variant = 's', children, color='ghost', href, className, ...props}: TagProps): JSX.Element => {
    return (
        <div
            className={cn(style.tag, className, {
                [style.s]: variant === 's',
                [style.m]: variant === 'm',
                [style.ghost]: color === 'ghost',
                [style.red]: color === 'red',
                [style.grey]: color === 'grey',
                [style.green]: color === 'green',
                [style.primary]: color === 'primary',
            })}
            {...props}
        >
            {
                href
                ? <a href={href}>{children}</a>
                : <>{children}</>
            }
        </div>
    );
};

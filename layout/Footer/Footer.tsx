import React from 'react';
import {FooterProps} from "./Footer.props";
import style from './Footer.module.css';
import cn from 'classnames';
import {format} from 'date-fns';



export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, style.footer)} {...props}>
            <div>GoodJob.Space 2021, {format(new Date(), 'yyyy')} All rights reserved</div>
            <a href='#' target='_blank'>Terms of use</a>
            <a href='#' target='_blank'>Privacy policy</a>
        </footer>
    );
};


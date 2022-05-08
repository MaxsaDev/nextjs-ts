import {ReactNode} from "react";

export interface HProps {
    variant: 'h1' | 'h2' | 'h3';
    children: ReactNode;
}
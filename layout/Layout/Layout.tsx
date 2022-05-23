import React, {FunctionComponent} from 'react';
import {LayoutProps} from "./Layout.props";
import style from './Layout.module.css';
import cn from 'classnames';
import {Sidebar} from "../Sidebar/Sidebar";
import {Footer} from "../Footer/Footer";
import {Header} from "../Header/Header";
import {AppContext, IAppContext} from "../../context/app.context";

const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div className={style.wrapper}>
            <Header className={style.header}/>
               <Sidebar className={style.sidebar}/>
                <div className={style.body}>
                    {children}
                </div>
            <Footer className={style.footer}/>
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContext.Provider menu={props.menu} firstCategory={props.firstCategory}>
            <Layout>
                <Component {...props} />
            </Layout>
            </AppContext.Provider>
        );
    };
};
import React from 'react';
import '../styles/globals.css'
import {AppProps} from "next/dist/shared/lib/router/router";
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <title>Title MyApp from _app</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
                      rel="stylesheet"/>
            </Head>
            <Component {...pageProps} />
        </>
    );

}

export default MyApp

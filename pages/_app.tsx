/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useEffect } from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import "@styles/global.css";
import { initializeApollo } from "@services/graphql";
import { ApolloProvider } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { Provider } from "react-redux";
import store from "@redux/store";
import { Router, useRouter } from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import "../src/styles/highlight.css";
import { DefaultSeo } from "next-seo";
import SEO from "../src/config/next-seo.config";
import { SessionProvider } from "next-auth/react";
import * as ga from "../lib/ga";

const Noop = ({ children }: { children: ReactNode }) => <>{children}</>;

export const apolloClient = initializeApollo();

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
    const queryClient = new QueryClient();
    const Layout = (Component as any).Layout || Noop;
    const router = useRouter();

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }
        const handleRouteChange = (url: string) => {
            ga.pageview(url);
        };
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on("routeChangeComplete", handleRouteChange);

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <ChakraProvider theme={theme}>
            <ApolloProvider client={apolloClient}>
                <QueryClientProvider client={queryClient}>
                    <Hydrate state={pageProps.dehydratedState}>
                        <Provider store={store}>
                            <SessionProvider session={session}>
                                <Layout pageProps={pageProps}>
                                    <DefaultSeo {...SEO} />
                                    <Component {...pageProps} />
                                </Layout>
                            </SessionProvider>
                        </Provider>
                    </Hydrate>
                </QueryClientProvider>
            </ApolloProvider>
        </ChakraProvider>
    );
}

export default MyApp;

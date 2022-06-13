/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";
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
import { Router } from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import "../src/styles/highlight.css";
import { DefaultSeo } from "next-seo";
import hljs from "highlight.js";
import SEO from "../src/config/next-seo.config";

import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

hljs.configure({
    languages: ["javascript", "ruby", "python", "rust"],
});

const Noop = ({ children }: { children: ReactNode }) => <>{children}</>;

export const apolloClient = initializeApollo();

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const queryClient = new QueryClient();
    const Layout = (Component as any).Layout || Noop;

    return (
        <ChakraProvider theme={theme}>
            <ApolloProvider client={apolloClient}>
                <QueryClientProvider client={queryClient}>
                    <Hydrate state={pageProps.dehydratedState}>
                        <Provider store={store}>
                            <Layout pageProps={pageProps}>
                                <DefaultSeo {...SEO} />
                                <Component {...pageProps} />
                            </Layout>
                        </Provider>
                    </Hydrate>
                </QueryClientProvider>
            </ApolloProvider>
        </ChakraProvider>
    );
}

export default MyApp;

import {
    ApolloClient,
    createHttpLink,
    from,
    InMemoryCache,
    NormalizedCacheObject,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";

const httpLink = createHttpLink({
    uri: serverUrl,
    credentials: "include",
    headers: {
        "platform-auth-user-agent": "web-platform",
        Origin:
            process.env.NODE_ENV === "production"
                ? "http://watchers-khaki.vercel.app"
                : "localhost", // <- Added this and now builds are no longer 500 erroring on vercel
    },
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        );
    if (networkError) console.log(`[Network error]: ${networkError}`);
});
const createApolloClient = new ApolloClient({
    ssrMode: typeof window === "undefined",
    uri: serverUrl,
    cache: new InMemoryCache(),
    link: from([errorLink, httpLink]),
});

export const initializeApollo = (): ApolloClient<NormalizedCacheObject> => {
    if (typeof window === "undefined") {
        return createApolloClient;
    }
    if (!apolloClient) {
        apolloClient = createApolloClient;
    }

    return apolloClient;
};

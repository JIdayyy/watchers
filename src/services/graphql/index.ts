import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
    NormalizedCacheObject,
} from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";

const httpLink = createHttpLink({
    uri: serverUrl,
    credentials: "include",
    headers: {
        "platform-auth-user-agent": "web-platform",
        Origin: "https://watchers-khaki.vercel.app", // <- Added this and now builds are no longer 500 erroring on vercel
    },
});

const createApolloClient = new ApolloClient({
    ssrMode: typeof window === "undefined",
    uri: serverUrl,
    cache: new InMemoryCache(),
    link: httpLink,
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

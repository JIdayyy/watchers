import {
    ApolloClient,
    createHttpLink,
    from,
    InMemoryCache,
    NormalizedCacheObject,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
// import { LocalStorageWrapper, persistCache } from "apollo3-cache-persist";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";

const httpLink = createHttpLink({
    uri: typeof window === "undefined" ? process.env.SERVER_URL : serverUrl,
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

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                posts: {
                    keyArgs: ["id"],
                    merge(existing = [], incoming) {
                        const myFinalArray = [];
                        // first concatenating two arrays.
                        const myArray3 = existing.concat(incoming);
                        let length = myArray3.length;
                        // iterating the concatenated array to its length and removing the repeating element
                        // from the final array.
                        while (length--) {
                            const item = myArray3[length];
                            if (myFinalArray.indexOf(item) === -1) {
                                myFinalArray.unshift(item);
                            }
                        }
                        return myFinalArray;
                    },
                },
            },
        },
    },
});
// const getCache = async () =>
//     await persistCache({
//         cache,
//         storage: new LocalStorageWrapper(window.localStorage),
//     });

const createApolloClient = new ApolloClient({
    ssrMode: typeof window === "undefined",
    uri: serverUrl,
    cache: cache,
    link: from([errorLink, httpLink]),
});

export const initializeApollo = (): ApolloClient<NormalizedCacheObject> => {
    if (typeof window === "undefined") {
        return createApolloClient;
    }
    if (!apolloClient) {
        apolloClient = createApolloClient;
    }

    // getCache();
    return apolloClient;
};

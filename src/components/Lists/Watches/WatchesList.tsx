import { VStack } from "@chakra-ui/react";
import React from "react";
import { useGetAllPostsQuery } from "src/generated/graphql";
import WatchCard from "./WatchCard";

export default function WatchesList(): JSX.Element {
    const { data } = useGetAllPostsQuery({
        variables: {
            where: {
                isDraft: {
                    equals: false,
                },
            },
        },
    });
    console.log(data);
    return (
        <VStack spacing={5} w="full" direction="column">
            {data?.posts.map((watch, index) => (
                <WatchCard watch={watch} isMain={index === 0} />
            ))}
        </VStack>
    );
}

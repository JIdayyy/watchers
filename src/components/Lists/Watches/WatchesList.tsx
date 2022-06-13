import { VStack } from "@chakra-ui/react";
import React from "react";
import { GetAllPostsQuery } from "src/generated/graphql";
import WatchCard from "../../Cards/WatchCard";

interface IProps {
    posts: GetAllPostsQuery["posts"];
}

export default function WatchesList({ posts }: IProps): JSX.Element {
    return (
        <VStack spacing={5} w="full" direction="column">
            {posts.map((watch, index) => (
                <WatchCard key={watch.id} watch={watch} isMain={index === 0} />
            ))}
        </VStack>
    );
}

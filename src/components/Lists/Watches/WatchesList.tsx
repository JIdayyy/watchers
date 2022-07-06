import { forwardRef, VStack } from "@chakra-ui/react";
import React from "react";
import { GetAllPostsQuery } from "src/generated/graphql";
import WatchCard from "../../Cards/WatchCard";

interface IProps {
    posts: GetAllPostsQuery["posts"];
}

const WatchesList = forwardRef(({ posts }: IProps, ref): JSX.Element => {
    console.log(posts);
    return (
        <VStack
            position="relative"
            spacing={[2, 3, 5]}
            w="full"
            direction="column"
        >
            {posts.map((watch, index) => (
                <>
                    <WatchCard
                        key={watch.id}
                        watch={watch}
                        isMain={index === 0}
                    />
                    {index === posts.length - 3 && posts.length > 5 && (
                        <span
                            style={{
                                visibility: "hidden",
                            }}
                            ref={ref}
                        />
                    )}
                </>
            ))}
        </VStack>
    );
});

export default WatchesList;

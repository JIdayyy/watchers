import { forwardRef, VStack } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { GetAllPostsQuery } from "src/generated/graphql";
import WatchCard from "../../Cards/WatchCard";

interface IProps {
    posts: GetAllPostsQuery["posts"];
}

const WatchesList = forwardRef(({ posts }: IProps, ref): JSX.Element => {
    return (
        <VStack
            position="relative"
            spacing={[2, 3, 5]}
            w="full"
            direction="column"
        >
            {posts.map((watch, index) => (
                <Fragment key={watch.id}>
                    <WatchCard watch={watch} isMain={index === 0} />
                    {index === posts.length - 3 && posts.length > 5 && (
                        <span
                            style={{
                                margin: 0,
                                height: 0,
                                visibility: "hidden",
                            }}
                            ref={ref}
                        />
                    )}
                </Fragment>
            ))}
        </VStack>
    );
});

export default WatchesList;

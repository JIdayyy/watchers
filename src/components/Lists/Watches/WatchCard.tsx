import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { GetAllPostsQuery } from "src/generated/graphql";

interface IProps {
    watch: GetAllPostsQuery["posts"][number];
    isMain?: boolean;
}

export default function WatchCard({ watch, isMain }: IProps): JSX.Element {
    return (
        <Flex
            direction="column"
            bg="white"
            rounded={10}
            shadow="base"
            w="full"
            h={isMain ? "500px" : "250px"}
            overflow="hidden"
        >
            {isMain && (
                <Box position="relative" w="full" h="250px">
                    <Image
                        src="/images/cardfakeimage.png"
                        layout="fill"
                        objectFit="cover"
                    />
                </Box>
            )}
            <Flex p={10} flexGrow={1}>
                <Flex mr={2} direction="column">
                    <Image src="/images/avatar.png" width={35} height={35} />
                </Flex>
                <Flex
                    justifyContent="space-between"
                    w="full"
                    direction="column"
                    h="full"
                >
                    <Flex direction="column">
                        <Text>Julien</Text>
                        <Text>Jan 02</Text>
                    </Flex>
                    <Text fontWeight="bold" isTruncated fontSize="24px">
                        {watch.title}
                    </Text>
                    <Flex>
                        {watch.Tags.map((tag) => (
                            <Text color="#8A8A8A" fontSize="12px">
                                #{tag.name}
                            </Text>
                        ))}
                    </Flex>
                    {/* <Flex>
                        <Text mr={5}>{watch.likes} Likes</Text>
                        <Text>{watch.comments.length} Comments</Text>
                    </Flex> */}
                </Flex>
            </Flex>
        </Flex>
    );
}

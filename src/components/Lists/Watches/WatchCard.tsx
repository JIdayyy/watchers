import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { GetAllPostsQuery } from "src/generated/graphql";

interface IProps {
    watch: GetAllPostsQuery["posts"][number];
    isMain?: boolean;
}

export default function WatchCard({ watch, isMain }: IProps): JSX.Element {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/${watch.slug}`);
    };

    return (
        <Flex
            onClick={handleClick}
            cursor="pointer"
            direction="column"
            bg="white"
            rounded={10}
            shadow="base"
            w="full"
            minH="200px"
            overflow="hidden"
        >
            {isMain && (
                <Box position="relative" w="full" h="200px">
                    <Image
                        priority
                        src="/images/cardfakeimage.png"
                        layout="fill"
                        objectFit="cover"
                    />
                </Box>
            )}
            <Flex p={5} flexGrow={1}>
                <Flex mr={2} direction="column">
                    <Image src="/images/avatar.png" width={35} height={35} />
                </Flex>
                <Flex
                    flexGrow={1}
                    justifyContent="space-between"
                    direction="column"
                >
                    <Flex direction="column">
                        <Text>Julien</Text>
                        <Text>Jan 02</Text>
                    </Flex>
                    <Text
                        fontWeight="bold"
                        w="full"
                        noOfLines={2}
                        fontSize="24px"
                    >
                        {watch.title}
                    </Text>
                    <Flex w="full" my={1}>
                        {watch.Tags.map((tag) => (
                            <Text key={tag.id} color="#8A8A8A" fontSize="14px">
                                #{tag.name}
                            </Text>
                        ))}
                    </Flex>
                    <Flex>
                        <Text mr={5}>12 Likes</Text>
                        <Text>40 Comments</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

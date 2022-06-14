import { Box, Flex, Text } from "@chakra-ui/react";
import { RootState } from "@redux/reducers";
import { DateTime } from "luxon";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { GetAllPostsQuery } from "src/generated/graphql";

interface IProps {
    watch: GetAllPostsQuery["posts"][number];
    isMain?: boolean;
}

export default function WatchCard({ watch, isMain }: IProps): JSX.Element {
    const router = useRouter();
    const { user } = useSelector((state: RootState) => state.user);

    const handleClick = () => {
        router.push(`/${watch.slug}`);
    };

    const date = DateTime.fromJSDate(new Date(watch.created_at));

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
                        src={watch.cover_picture}
                        layout="fill"
                        objectFit="cover"
                    />
                </Box>
            )}
            <Flex p={5} flexGrow={1}>
                <Flex mr={2} direction="column">
                    {watch.author.avatar && (
                        <Box
                            overflow="hidden"
                            position="relative"
                            width={35}
                            height={35}
                            rounded="full"
                        >
                            <Image src={watch.author.avatar} layout="fill" />
                        </Box>
                    )}
                </Flex>
                <Flex
                    flexGrow={1}
                    justifyContent="space-between"
                    direction="column"
                >
                    <Flex direction="column">
                        <Text>{user.nickName}</Text>
                        <Text>
                            {date.day} {date.monthShort} {date.year}
                        </Text>
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
                            <Text
                                mr={1}
                                key={tag.id}
                                color="#8A8A8A"
                                fontSize="14px"
                            >
                                #{tag.name}
                            </Text>
                        ))}
                    </Flex>
                    <Flex>
                        <Text mr={5}>12 Likes</Text>
                        <Text>{watch.commentCount.count} Comments</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

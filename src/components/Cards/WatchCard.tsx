import { Box, Flex, Icon, Text, useColorMode } from "@chakra-ui/react";
import { DateTime } from "luxon";
import Image from "next/image";
import React from "react";
import {
    GetAllPostsQuery,
    useGetAllPostLikesQuery,
} from "src/generated/graphql";
import { AiFillLike } from "react-icons/ai";
import { TbMessageCircle2 } from "react-icons/tb";
import CustomBox from "@definitions/chakra/theme/components/Box/CustomBox";
import Link from "next/link";

interface IProps {
    watch: GetAllPostsQuery["posts"][number];
    isMain?: boolean;
}

export default function WatchCard({ watch, isMain }: IProps): JSX.Element {
    const { colorMode } = useColorMode();
    const { data } = useGetAllPostLikesQuery({
        variables: {
            where: {
                id: watch.id,
            },
        },
    });

    const date = DateTime.fromJSDate(new Date(watch.created_at));

    return (
        <Link prefetch href={`/${watch.slug}`}>
            <CustomBox
                border={colorMode == "light" ? "1px solid #D6D6D6" : ""}
                variant="solid"
                cursor="pointer"
                flexDir="column"
                display="flex"
                rounded={[0, 0, "md"]}
                w="full"
                minH="200px"
                overflow="hidden"
            >
                {isMain && watch.cover_picture && (
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
                        {(watch.author.avatar || watch.author.image) && (
                            <Box
                                overflow="hidden"
                                position="relative"
                                width={35}
                                height={35}
                                rounded="full"
                            >
                                <Image
                                    src={
                                        watch.author.avatar ||
                                        watch.author.image
                                    }
                                    layout="fill"
                                />
                            </Box>
                        )}
                    </Flex>
                    <Flex
                        flexGrow={1}
                        justifyContent="space-between"
                        direction="column"
                    >
                        <Flex direction="column">
                            <Text>{watch.author.nickname}</Text>
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
                            <Text mr={5}>
                                <Icon mr={1} as={AiFillLike} size={10} />
                                {data?.post.User_likes.length} Likes
                            </Text>
                            <Text>
                                <Icon mr={1} as={TbMessageCircle2} size={10} />
                                {watch.commentCount.count} Comments
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </CustomBox>
        </Link>
    );
}

import { Flex, Text, useColorMode, VStack } from "@chakra-ui/react";
import { RootState } from "@redux/reducers";
import React from "react";
import { useSelector } from "react-redux";
import {
    SortOrder,
    useGetAllFollowersQuery,
    useGetAllPostByInputQuery,
} from "src/generated/graphql";

export default function DashboardSidebar(): JSX.Element {
    const { colorMode } = useColorMode();
    const { user } = useSelector((state: RootState) => state.user);
    const { data, loading } = useGetAllPostByInputQuery({
        fetchPolicy: "no-cache",
        variables: {
            where: {
                author: {
                    is: {
                        id: {
                            equals: user.id,
                        },
                    },
                },
                is_disabled: {
                    equals: false,
                },
            },
            take: 999999,
            skip: 0,
            orderBy: {
                created_at: SortOrder.Desc,
            },
        },
    });

    const { data: allFollowers, loading: allFollowersLoading } =
        useGetAllFollowersQuery({
            notifyOnNetworkStatusChange: true,
            variables: {
                where: {
                    id: user.id,
                },
            },
        });

    return (
        <Flex mr={5} pt={10} w="24%" direction="column">
            <VStack spacing={4}>
                <Flex
                    alignItems="center"
                    px={2}
                    _hover={{
                        backgroundColor:
                            colorMode === "light" ? "white" : "gray.600",
                    }}
                    rounded="md"
                    cursor="pointer"
                    w="full"
                    justifyContent="space-between"
                >
                    <Text fontWeight="bold" fontSize="18">
                        Posts:
                    </Text>
                    <Text
                        bg={colorMode === "dark" ? "#171717" : "white"}
                        fontWeight="bold"
                        rounded="md"
                        minW={35}
                        minH={35}
                        textAlign="center"
                        p={2}
                    >
                        {!loading && data?.posts.length}
                    </Text>
                </Flex>
                <Flex
                    alignItems="center"
                    px={2}
                    _hover={{
                        backgroundColor:
                            colorMode === "light" ? "white" : "gray.600",
                    }}
                    rounded="md"
                    cursor="pointer"
                    w="full"
                    justifyContent="space-between"
                >
                    <Text fontWeight="bold" fontSize="18">
                        Followers:
                    </Text>
                    <Text
                        bg={colorMode === "dark" ? "#171717" : "white"}
                        fontWeight="bold"
                        rounded="md"
                        p={2}
                        textAlign="center"
                        minW={35}
                        minH={35}
                    >
                        {!allFollowersLoading &&
                            allFollowers?.user.followersCount.count}
                    </Text>
                </Flex>
                <Flex
                    alignItems="center"
                    px={2}
                    _hover={{
                        backgroundColor:
                            colorMode === "light" ? "white" : "gray.600",
                    }}
                    rounded="md"
                    cursor="pointer"
                    w="full"
                    justifyContent="space-between"
                >
                    <Text fontWeight="bold" fontSize="18">
                        Videos:
                    </Text>
                    <Text
                        bg={colorMode === "dark" ? "#171717" : "white"}
                        fontWeight="bold"
                        rounded="md"
                        p={2}
                        textAlign="center"
                        minW={35}
                        minH={35}
                    >
                        0
                    </Text>
                </Flex>
            </VStack>
        </Flex>
    );
}

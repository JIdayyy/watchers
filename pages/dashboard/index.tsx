import { Center, Flex, Spinner, Text, useColorMode } from "@chakra-ui/react";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import CustomBox from "@definitions/chakra/theme/components/Box/CustomBox";
import { RootState } from "@redux/reducers";
import { DateTime } from "luxon";

import React from "react";
import { useSelector } from "react-redux";
import { SortOrder, useGetAllPostByInputQuery } from "src/generated/graphql";
import DashboardPostCardMenu from "@components/Menu/DashboardPostCardMenu";
import Link from "next/link";

export default function Dashboard(): JSX.Element {
    const { user } = useSelector((state: RootState) => state.user);
    const { colorMode } = useColorMode();

    const { data, loading, refetch } = useGetAllPostByInputQuery({
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
            take: 10,
            skip: 0,
            orderBy: {
                created_at: SortOrder.Desc,
            },
        },
    });

    const convertdDate = (date: string) => DateTime.fromJSDate(new Date(date));

    const formatedDate = (date: string) =>
        `${convertdDate(date).day} ${convertdDate(date).monthShort} ${
            convertdDate(date).year
        }`;

    if (loading) {
        return (
            <Center w="full" h="full">
                <Spinner />
            </Center>
        );
    }

    return (
        <Flex w="full" direction="column">
            {data?.posts.map((post) => (
                <CustomBox
                    border={colorMode === "light" ? "1px solid #D6D6D6" : ""}
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    rounded="md"
                    p={5}
                    w="full"
                    my={3}
                >
                    <Flex w="full" direction="column">
                        <Link href={`/${post.slug}`}>
                            <Text
                                _hover={{ textDecor: "underline" }}
                                cursor="pointer"
                                color="#614AEE"
                                fontWeight="bold"
                            >
                                {post.title}
                            </Text>
                        </Link>
                        <Text color="gray.400">
                            Published on {formatedDate(post.created_at)}
                        </Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Text fontSize={12}>EDIT</Text>
                        <DashboardPostCardMenu
                            refetch={refetch}
                            postId={post.id}
                        />
                    </Flex>
                </CustomBox>
            ))}
        </Flex>
    );
}

Dashboard.Layout = DashboardLayout;

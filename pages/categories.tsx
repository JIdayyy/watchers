import {
    Box,
    Flex,
    Grid,
    GridItem,
    Text,
    useColorMode,
} from "@chakra-ui/react";
import MainLayout from "@components/Layouts/MainLayout";
import WatchesList from "@components/Lists/Watches/WatchesList";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
    SortOrder,
    useGetAllCategoriesQuery,
    useGetAllPostByInputQuery,
} from "src/generated/graphql";

export default function Categories(): JSX.Element {
    const { colorMode } = useColorMode();
    const { data } = useGetAllCategoriesQuery();
    const [selectedCategory, setSelectedCategory] = useState("dev");
    const { ref, inView } = useInView();
    console.log(selectedCategory);
    const { data: posts, fetchMore } = useGetAllPostByInputQuery({
        fetchPolicy: "no-cache",
        notifyOnNetworkStatusChange: true,
        variables: {
            where: {
                Category: {
                    is: {
                        name: {
                            equals: selectedCategory,
                        },
                    },
                },
            },
            skip: 0,
            take: 6,
            orderBy: {
                created_at: SortOrder.Desc,
            },
        },
    });

    useEffect(() => {
        if (inView) {
            fetchMore({
                variables: {
                    skip: posts?.posts.length,
                    take: 6,
                    where: {
                        Category: {
                            is: {
                                name: {
                                    equals: selectedCategory,
                                },
                            },
                        },
                    },
                },
            });
        }
    }, [inView]);

    const backgroundColor = (category: string) => {
        if (colorMode === "light" && selectedCategory === category) {
            return "gray.200";
        }
        if (colorMode === "dark" && selectedCategory === category) {
            return "whiteAlpha.200";
        }
    };

    return (
        <Flex
            direction="column"
            w="full"
            justifyContent="flex-start"
            maxW="7xl"
        >
            <Text as="h1">Categories</Text>
            <Grid
                alignItems="start"
                minW={["full", "full", "full", "7xl"]}
                maxW="7xl"
                px={[0, 0, 2, 0]}
                pb={10}
                gap={[0, 0, 7]}
                templateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(5, 1fr)",
                ]}
            >
                <GridItem colSpan={[1, 1]}>
                    <Box
                        display="flex"
                        rounded={[0, 0, "md"]}
                        overflow="hidden"
                        flexDirection="column"
                        pb="30px"
                    >
                        {data?.categories.map((category) => (
                            <Flex
                                onClick={() =>
                                    setSelectedCategory(category.name)
                                }
                                my={1}
                                key={category.id}
                                bg={backgroundColor(category.name)}
                                _hover={{
                                    textDecoration: "underline",
                                    bg:
                                        colorMode === "light"
                                            ? "gray.200"
                                            : "#171717",
                                }}
                                cursor="pointer"
                                rounded="md"
                                p={3}
                                w="full"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                            >
                                <Text mx={2}>{category.name}</Text>
                            </Flex>
                        ))}
                    </Box>
                </GridItem>
                <GridItem
                    alignSelf="start"
                    position="sticky"
                    display="flex"
                    flexDir="column"
                    colSpan={[4, 4]}
                    w="full"
                >
                    <WatchesList ref={ref} posts={posts?.posts || []} />
                </GridItem>
            </Grid>
        </Flex>
    );
}

Categories.Layout = MainLayout;

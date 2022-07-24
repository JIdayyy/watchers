import React, { useCallback, useEffect, useState } from "react";
import {
    Button,
    Flex,
    Grid,
    GridItem,
    Text,
    useColorMode,
} from "@chakra-ui/react";
import MainLayout from "@components/Layouts/MainLayout";
import WatchesList from "@components/Lists/Watches/WatchesList";
import settingsConfig from "../website-config/settings.json";
import Image from "next/image";
import NavigationCard from "@components/Navigation/NavigationCard";
import {
    GetAllPostsDocument,
    GetAllPostsQuery,
    SortOrder,
    useGetAllPostsQuery,
} from "src/generated/graphql";
import { apolloClient } from "./_app";
import { GetStaticPropsResult } from "next";
import CustomBox from "@definitions/chakra/theme/components/Box/CustomBox";
import { useInView } from "react-intersection-observer";

interface IProps {
    posts: GetAllPostsQuery["posts"];
}

enum SortBy {
    Latest,
    Oldest,
    MostLiked,
}

const Home = ({ posts }: IProps): JSX.Element => {
    const { ref, inView } = useInView();
    const [isClient, setIsClient] = useState(false);
    const { colorMode } = useColorMode();

    const [sortOrder, setSortOrder] = useState(SortBy.Latest);

    const { data: postsData, fetchMore } = useGetAllPostsQuery({
        notifyOnNetworkStatusChange: true,
        variables: {
            where: {
                isDraft: {
                    equals: false,
                },
                is_disabled: {
                    equals: false,
                },
            },
            skip: 0,
            take: 10,
            orderBy: {
                created_at: SortOrder.Desc,
            },
        },

        skip: isClient === false,
    });

    useEffect(() => {
        apolloClient.writeQuery({
            query: GetAllPostsDocument,
            data: {
                posts: [...posts],
            },
            variables: {
                where: {
                    isDraft: {
                        equals: false,
                    },
                    is_disabled: {
                        equals: false,
                    },
                },
                skip: 0,
                take: 10,

                orderBy: {
                    created_at: SortOrder.Desc,
                },
            },
            overwrite: true,
        });
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (inView) {
            fetchMore({
                variables: {
                    skip: postsData?.posts.length,
                    take: 6,
                    where: {
                        isDraft: {
                            equals: false,
                        },
                        is_disabled: {
                            equals: false,
                        },
                    },
                },
            });
        }
    }, [inView]);

    const copy = postsData ? [...postsData?.posts] : [];

    const sortFilter = useCallback(
        () =>
            copy.sort((a, b) => {
                if (sortOrder === SortBy.Latest) {
                    return (
                        new Date(b.created_at).getTime() -
                        new Date(a.created_at).getTime()
                    );
                }
                if (sortOrder === SortBy.Oldest) {
                    return (
                        new Date(a.created_at).getTime() -
                        new Date(b.created_at).getTime()
                    );
                }
                if (sortOrder === SortBy.MostLiked) {
                    return b.likeCount.count - a.likeCount.count;
                }
                return 0;
            }),
        [postsData, sortOrder],
    );

    return (
        <Grid
            p={[0, 0, 2, 2, 0]}
            mb="100px"
            gap={7}
            templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(5, 1fr)",
            ]}
            w="full"
            maxW="7xl"
        >
            <GridItem
                alignSelf="start"
                position="sticky"
                top="110px"
                display={["none", "none", "none", "block"]}
                colSpan={1}
            >
                <NavigationCard />
            </GridItem>
            <GridItem position="relative" colSpan={3}>
                <Flex
                    p={5}
                    fontSize="18px"
                    h="15"
                    justifyContent="flex-start"
                    alignItems="center"
                    w="full"
                >
                    <Flex
                        onClick={() => setSortOrder(SortBy.Latest)}
                        cursor="pointer"
                        fontWeight={
                            sortOrder === SortBy.Latest ? "bold" : "normal"
                        }
                        mr={6}
                    >
                        Latest
                    </Flex>
                    <Flex
                        onClick={() => setSortOrder(SortBy.Oldest)}
                        cursor="pointer"
                        fontWeight={
                            sortOrder === SortBy.Oldest ? "bold" : "normal"
                        }
                        mr={6}
                    >
                        Oldest
                    </Flex>
                    <Flex
                        onClick={() => setSortOrder(SortBy.MostLiked)}
                        cursor="pointer"
                        fontWeight={
                            sortOrder === SortBy.MostLiked ? "bold" : "normal"
                        }
                        mr={6}
                    >
                        Top
                    </Flex>
                </Flex>
                <WatchesList ref={ref} posts={sortFilter() || posts} />
            </GridItem>
            <GridItem
                alignSelf="start"
                position="sticky"
                top="120px"
                display={["none", "none", "none", "block"]}
                colSpan={1}
            >
                <CustomBox
                    flexDirection="column"
                    display="flex"
                    p={5}
                    border={colorMode === "light" ? "1px solid #D6D6D6" : ""}
                    h="300px"
                    rounded="md"
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    <Flex
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        w="full"
                        h="full"
                        direction="column"
                    >
                        <Text my={1} fontSize="18px" fontWeight="bold">
                            Our website is finally available !
                        </Text>
                        <Text my={1} fontSize="12px" fontWeight="normal">
                            We are proud to release our brand new website on the
                            internet !
                        </Text>
                        <Image
                            quality={100}
                            src="/images/party.png"
                            width={39}
                            height={39}
                        />
                    </Flex>
                    <Button w="full">
                        {settingsConfig["add-post-button"]}
                    </Button>
                </CustomBox>
            </GridItem>
        </Grid>
    );
};

export const getStaticProps = async (): Promise<
    GetStaticPropsResult<IProps>
> => {
    const data = await apolloClient.query({
        query: GetAllPostsDocument,

        variables: {
            where: {
                isDraft: {
                    equals: false,
                },
                is_disabled: {
                    equals: false,
                },
            },
            skip: 0,
            take: 10,
            orderBy: {
                created_at: SortOrder.Desc,
            },
        },
    });

    return {
        props: {
            posts: data.data.posts,
        },
        revalidate: 10,
    };
};

Home.Layout = MainLayout;

export default Home;

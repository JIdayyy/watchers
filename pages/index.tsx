import React from "react";
import { Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import MainLayout from "@components/Layouts/MainLayout";
import WatchesList from "@components/Lists/Watches/WatchesList";
import Image from "next/image";
import NavigationCard from "@components/Navigation/NavigationCard";
import {
    GetAllPostsDocument,
    GetAllPostsQuery,
    SortOrder,
} from "src/generated/graphql";
import { apolloClient } from "./_app";
import { GetStaticPropsResult } from "next";

interface IProps {
    posts: GetAllPostsQuery["posts"];
}

const Home = ({ posts }: IProps): JSX.Element => {
    return (
        <Grid
            p={[2, 2, 2, 2, 0]}
            mb="100px"
            gap={7}
            templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(5, 1fr)",
            ]}
            minH="100vh"
            w="full"
            maxW="7xl"
        >
            <GridItem display={["none", "none", "none", "block"]} colSpan={1}>
                <NavigationCard />
            </GridItem>
            <GridItem colSpan={3}>
                <WatchesList posts={posts} />
            </GridItem>
            <GridItem display={["none", "none", "none", "block"]} colSpan={1}>
                <Flex
                    direction="column"
                    p={5}
                    shadow="base"
                    h="300px"
                    rounded="md"
                    bg="white"
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
                    <Button w="full">Add Watch</Button>
                </Flex>
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
            },
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

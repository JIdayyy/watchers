/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Grid, GridItem, Flex, Button, Text, Spinner } from "@chakra-ui/react";
import MainLayout from "@components/Layouts/MainLayout";
import WatchesList from "@components/Lists/Watches/WatchesList";
import NavigationCard from "@components/Navigation/NavigationCard";
import { RootState } from "@redux/reducers";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { useGetAllPostsQuery } from "src/generated/graphql";

export default function Myposts(): JSX.Element {
    const { user } = useSelector((state: RootState) => state.user);
    const { data } = useGetAllPostsQuery({
        variables: {
            where: {
                author: {
                    is: {
                        id: {
                            equals: user!.id,
                        },
                    },
                },
            },
        },
        skip: !user,
    });

    if (!data?.posts) return <Spinner />;

    return (
        <Grid
            p={[3, 2, 2, 0]}
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
                <WatchesList posts={data?.posts} />
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
}

Myposts.Layout = MainLayout;

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Grid, GridItem, Spinner } from "@chakra-ui/react";
import MainLayout from "@components/Layouts/MainLayout";
import WatchesList from "@components/Lists/Watches/WatchesList";
import NavigationCard from "@components/Navigation/NavigationCard";
import { RootState } from "@redux/reducers";
import React from "react";
import { useSelector } from "react-redux";
import { SortOrder, useGetAllPostsQuery } from "src/generated/graphql";

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
            orderBy: {
                created_at: SortOrder.Desc,
            },
        },
        skip: !user.id,
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
            <GridItem
                display={["none", "none", "none", "block"]}
                colSpan={1}
            ></GridItem>
        </Grid>
    );
}

Myposts.Layout = MainLayout;

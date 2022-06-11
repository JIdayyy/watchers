import React from "react";
import { Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import MainLayout from "@components/Layouts/MainLayout";
import WatchesList from "@components/Lists/Watches/WatchesList";
import Image from "next/image";
import NavigationCard from "@components/Navigation/NavigationCard";

const Home = (): JSX.Element => {
    return (
        <Grid
            gap={7}
            templateColumns="repeat(5, 1fr)"
            minH="100vh"
            maxW="7xl"
            w="7xl"
        >
            <GridItem colSpan={1}>
                <NavigationCard />
            </GridItem>
            <GridItem colSpan={3}>
                <WatchesList />
            </GridItem>
            <GridItem colSpan={1}>
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
                    <Flex w="full" h="full" direction="column">
                        <Text my={1} fontSize="18px" fontWeight="bold">
                            Our website is finally available !
                        </Text>
                        <Text my={1} fontSize="12px" fontWeight="normal">
                            We are proud to release our brand new website on the
                            internet !
                        </Text>
                        <Button w="full">Add Watch</Button>
                    </Flex>
                    <Image
                        quality={100}
                        src="/images/party.png"
                        width={39}
                        height={39}
                    />
                </Flex>
            </GridItem>
        </Grid>
    );
};

Home.Layout = MainLayout;

export default Home;

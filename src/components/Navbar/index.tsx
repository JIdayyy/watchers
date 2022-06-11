import { Button, Flex, Grid, GridItem, Input, Text } from "@chakra-ui/react";
import { RootState } from "@redux/reducers";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

export default function Navbar(): JSX.Element {
    const router = useRouter();
    const { user } = useSelector((state: RootState) => state.user);

    return (
        <Flex
            zIndex="overlay"
            bg="white"
            position="fixed"
            top={0}
            shadow="base"
            w="full"
            p={3}
            justifyContent="center"
            alignItems="center"
        >
            <Grid w="7xl" gap={7} templateColumns="repeat(5, 1fr)">
                <GridItem colSpan={1}>
                    <Button
                        bg="black"
                        px={5}
                        rounded={5}
                        justifyContent="center"
                        alignItems="center"
                        w="full"
                        onClick={() => router.push("/")}
                    >
                        <Text mr={2} color="white" fontWeight="bold">
                            Tech Watchers
                        </Text>
                        <Image
                            src="/icons/watchers.png"
                            width={25}
                            height={25}
                        />
                    </Button>
                </GridItem>
                <GridItem display="flex" colSpan={3}>
                    <Input flexGrow={1} placeholder="Search..." />
                </GridItem>
                <GridItem colSpan={1} display="flex" flexDirection="row">
                    {user ? (
                        <Button onClick={() => router.push("/new")} w="full">
                            Add Watch
                        </Button>
                    ) : (
                        <>
                            <Button
                                mx={1}
                                _hover={{ backgroundColor: "transparent" }}
                                bg="transparent"
                            >
                                Sign In
                            </Button>
                            <Button
                                color="white"
                                bg="#64B1F8"
                                px={5}
                                py={1}
                                rounded={5}
                                justifyContent="center"
                                alignItems="center"
                                w="full"
                                onClick={() => router.push("/login")}
                            >
                                Log In
                            </Button>
                        </>
                    )}
                </GridItem>
            </Grid>
        </Flex>
    );
}

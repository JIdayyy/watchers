import { Flex, Text, useColorMode, VStack } from "@chakra-ui/react";
import React from "react";

export default function DashboardSidebar(): JSX.Element {
    const { colorMode } = useColorMode();
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
                        p={2}
                    >
                        10
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
                    >
                        10
                    </Text>{" "}
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
                    >
                        10
                    </Text>
                </Flex>
            </VStack>
        </Flex>
    );
}

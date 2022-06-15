import {
    Button,
    Flex,
    Grid,
    GridItem,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Kbd,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { RootState } from "@redux/reducers";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SearchModal from "@components/Modals/SearchModal";
import UserMenu from "@components/Menu/UserMenu";
import { FiMenu } from "react-icons/fi";

export default function Navbar(): JSX.Element {
    const router = useRouter();
    const { user } = useSelector((state: RootState) => state.user);
    const { isOpen, onClose, onOpen } = useDisclosure();

    useEffect(() => {
        let cmdDown = false;

        document.body.addEventListener("keydown", function (event) {
            const key = event.key || 0;
            if (key === "Meta") {
                cmdDown = true;
            }
        });

        document.body.addEventListener("keydown", function (event) {
            const key = event.key || 0;
            if (key === "k") {
                if (cmdDown && key === "k") {
                    onOpen();
                }
            }
        });
    }, []);

    return (
        <Flex
            zIndex={10}
            bg="white"
            position="fixed"
            top={0}
            shadow="base"
            w="100vw"
            p={3}
            justifyContent="center"
            alignItems="center"
        >
            <Grid
                w={["full", "7xl"]}
                gap={[0, 7]}
                templateColumns="repeat(5, 1fr)"
            >
                <GridItem display="flex" colSpan={1}>
                    <Button
                        display={["block", "none"]}
                        bg="transparent"
                        size="md"
                    >
                        <Icon as={FiMenu} size={20} />
                    </Button>
                    <Button
                        _focus={{ border: "0px" }}
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
                <GridItem display="flex" colSpan={[0, 3]}>
                    <InputGroup display={["none", "none", "block"]}>
                        <InputRightElement
                            pointerEvents="none"
                            children={
                                <Flex mr={20}>
                                    <Kbd mx={1} rounded="0px">
                                        ⌘
                                    </Kbd>
                                    <Kbd mx={1} rounded="0px">
                                        k
                                    </Kbd>
                                </Flex>
                            }
                        />
                        <Input
                            onClick={() => onOpen()}
                            flexGrow={1}
                            placeholder="Search..."
                        />
                        <SearchModal isOpen={isOpen} onClose={onClose} />
                    </InputGroup>
                </GridItem>
                <GridItem colSpan={1} display="flex" flexDirection="row">
                    {user.id ? (
                        <Flex
                            display={["none", "flex"]}
                            w="full"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Button
                                mr={2}
                                px={2}
                                w={["100%", "70%"]}
                                color="white"
                                bg="blue.400"
                                _focus={{ border: "0px" }}
                                onClick={() => router.push("/new")}
                            >
                                Add Watch
                            </Button>

                            <UserMenu />
                        </Flex>
                    ) : (
                        <>
                            <Button
                                onClick={() => router.push("/register")}
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

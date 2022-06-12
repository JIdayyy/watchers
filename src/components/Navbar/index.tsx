import {
    Button,
    Flex,
    Grid,
    GridItem,
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
                    <InputGroup>
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

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
    useColorMode,
    useDisclosure,
} from "@chakra-ui/react";
import { RootState } from "@redux/reducers";
import Image from "next/image";
import globalWebsiteConfig from "../../../website-config/global.json";
import settingsConfig from "../../../website-config/settings.json";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SearchModal from "@components/Modals/SearchModal";
import UserMenu from "@components/Menu/UserMenu";
import DrawerMenu from "@components/Menu/DrawerMenu";
import CustomBox from "@definitions/chakra/theme/components/Box/CustomBox";
import { FaRegMoon } from "react-icons/fa";
import { ImSun } from "react-icons/im";

export default function Navbar(): JSX.Element {
    const router = useRouter();
    const { user } = useSelector((state: RootState) => state.user);
    const { isOpen, onClose, onOpen } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

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
        <CustomBox
            display="flex"
            variant="solid"
            zIndex={10}
            position="fixed"
            top={0}
            border={colorMode == "light" ? "1px solid #D6D6D6" : ""}
            w="100vw"
            px={3}
            py={2}
            justifyContent="center"
            alignItems="center"
        >
            <Grid
                w="full"
                maxW="7xl"
                gap={[0, 7]}
                templateColumns="repeat(5, 1fr)"
                display={["flex", "grid"]}
                justifyContent="space-between"
            >
                <GridItem display="flex" colSpan={[5, 1]}>
                    <Flex w="full" justifyContent="space-between">
                        <DrawerMenu />
                        <Button
                            _focus={{ border: "0px" }}
                            bg="black"
                            px={5}
                            ml={1}
                            rounded={5}
                            justifyContent="center"
                            alignItems="center"
                            w={["70%", "full"]}
                            onClick={() => router.push("/")}
                        >
                            <Text
                                display={["none", "flex"]}
                                mr={2}
                                color="white"
                                fontWeight="bold"
                            >
                                {globalWebsiteConfig["website-title"]}
                            </Text>
                            <Image
                                src={globalWebsiteConfig["website-logo"]}
                                width={25}
                                height={25}
                            />
                        </Button>
                        <Button
                            _focus={{ borderColor: "" }}
                            onClick={() => toggleColorMode()}
                            ml={2}
                        >
                            <Icon
                                as={colorMode === "light" ? FaRegMoon : ImSun}
                                size={10}
                            />
                        </Button>
                    </Flex>
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
                        <>
                            <Flex
                                display={["flex", "flex"]}
                                w="full"
                                alignItems="center"
                                justifyContent={["flex-end", "space-between"]}
                            >
                                <Button
                                    display={["none", "flex"]}
                                    mr={2}
                                    px={2}
                                    w={["100%", "70%"]}
                                    color="white"
                                    _focus={{ border: "0px" }}
                                    onClick={() => router.push("/new")}
                                    variant="action"
                                >
                                    {settingsConfig["add-post-button"]}
                                </Button>

                                <UserMenu />
                            </Flex>
                        </>
                    ) : (
                        <Flex display={["flex", "flex"]} w="full">
                            <Button
                                onClick={() => router.push("/register")}
                                mx={1}
                                _hover={{ backgroundColor: "transparent" }}
                                bg="transparent"
                            >
                                Sign Up
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
                        </Flex>
                    )}
                </GridItem>
            </Grid>
        </CustomBox>
    );
}

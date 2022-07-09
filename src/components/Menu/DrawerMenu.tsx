import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Icon,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { RootState } from "@redux/reducers";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { useSelector } from "react-redux";
import navLinks, { INavLink } from "src/config/navLinks";

export default function DrawerMenu(): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef(null);
    const { user } = useSelector((state: RootState) => state.user);
    const { push } = useRouter();

    const roleFilter = (link: INavLink) => {
        if (link.role === "ALL") {
            return true;
        }
        if (user.roles === link.role) {
            return true;
        }
        return false;
    };

    return (
        <>
            <Button
                display={["flex", "flex", "none"]}
                bg="transparent"
                size="md"
                ref={btnRef}
                onClick={onOpen}
            >
                <Icon as={FiMenu} size={20} />
            </Button>
            <Drawer
                size="sm"
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Tech Watch </DrawerHeader>

                    <DrawerBody>
                        <Flex rounded={5} direction="column" w="full">
                            {navLinks.filter(roleFilter).map((link) => (
                                <Flex
                                    onClick={() => {
                                        push(link.path);
                                        onClose();
                                    }}
                                    cursor="pointer"
                                    _hover={{ bg: "gray.200" }}
                                    rounded="md"
                                    p={3}
                                    key={link.id}
                                    w="full"
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                >
                                    <Image
                                        src={link.icon}
                                        width={20}
                                        height={20}
                                    />
                                    <Text
                                        mx={2}
                                        _hover={{
                                            textDecoration: "underline",
                                        }}
                                    >
                                        {link.name}
                                    </Text>
                                </Flex>
                            ))}

                            {user.id && (
                                <Flex
                                    onClick={() => signOut()}
                                    cursor="pointer"
                                    _hover={{ bg: "gray.200" }}
                                    rounded="md"
                                    p={3}
                                    w="full"
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                >
                                    <Image
                                        src="/icons/logout.png"
                                        width={20}
                                        height={20}
                                    />
                                    <Text
                                        mx={2}
                                        _hover={{ textDecoration: "underline" }}
                                    >
                                        Logout
                                    </Text>
                                </Flex>
                            )}
                        </Flex>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}

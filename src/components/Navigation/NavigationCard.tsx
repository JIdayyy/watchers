import { Flex, Text, useColorMode } from "@chakra-ui/react";
import { RootState } from "@redux/reducers";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import navLinks, { INavLink } from "src/config/navLinks";

export default function NavigationCard(): JSX.Element {
    const { user } = useSelector((state: RootState) => state.user);
    const { colorMode } = useColorMode();

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
        <Flex rounded={5} direction="column" w="full">
            {navLinks.filter(roleFilter).map((link) => (
                <Link key={link.id} href={link.path}>
                    <Flex
                        _hover={{
                            textDecoration: "underline",
                            bg: colorMode === "light" ? "gray.200" : "#171717",
                        }}
                        cursor="pointer"
                        rounded="md"
                        p={3}
                        key={link.id}
                        w="full"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                    >
                        <Image src={link.icon} width={20} height={20} />
                        <Text mx={2}>{link.name}</Text>
                    </Flex>
                </Link>
            ))}

            {user.id && (
                <Flex
                    _hover={{
                        textDecoration: "underline",
                        bg: colorMode === "light" ? "gray.200" : "#171717",
                    }}
                    onClick={() => signOut()}
                    cursor="pointer"
                    rounded="md"
                    p={3}
                    w="full"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Image src="/icons/logout.png" width={20} height={20} />
                    <Text mx={2} _hover={{ textDecoration: "underline" }}>
                        Logout
                    </Text>
                </Flex>
            )}
        </Flex>
    );
}

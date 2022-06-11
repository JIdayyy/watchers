import { Flex, Text } from "@chakra-ui/react";
import { RootState } from "@redux/reducers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import navLinks from "src/config/navLinks";
import { Role } from "src/generated/graphql";

export default function NavigationCard(): JSX.Element {
    const { user } = useSelector((state: RootState) => state.user);
    return (
        <Flex rounded={5} direction="column" w="full">
            {navLinks.map((link) => (
                <Link href={link.path}>
                    <Flex
                        cursor="pointer"
                        _hover={{ bg: "gray.200" }}
                        rounded="md"
                        p={3}
                        key={link.id}
                        w="full"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                    >
                        <Image src={link.icon} width={20} height={20} />
                        <Text mx={2} _hover={{ textDecoration: "underline" }}>
                            {link.name}
                        </Text>
                    </Flex>
                </Link>
            ))}
            {user?.roles.includes(Role.Admin || Role.SuperAdmin) && (
                <Link href="/admin">
                    <Flex
                        cursor="pointer"
                        _hover={{ bg: "gray.200" }}
                        rounded="md"
                        p={3}
                        w="full"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                    >
                        <Image src="/icons/admin.png" width={20} height={20} />
                        <Text mx={2} _hover={{ textDecoration: "underline" }}>
                            Admin
                        </Text>
                    </Flex>
                </Link>
            )}
        </Flex>
    );
}

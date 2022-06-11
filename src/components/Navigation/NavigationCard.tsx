import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import navLinks from "src/config/navLinks";

export default function NavigationCard(): JSX.Element {
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
        </Flex>
    );
}

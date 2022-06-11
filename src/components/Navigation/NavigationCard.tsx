import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import navLinks from "src/config/navLinks";

export default function NavigationCard(): JSX.Element {
    return (
        <Flex
            p={5}
            bg="white"
            shadow="base"
            rounded={5}
            h="300px"
            direction="column"
            w="full"
        >
            {navLinks.map((link) => (
                <Flex
                    w="full"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Image src={link.icon} width={20} height={20} />
                    <Link href={link.path}>
                        <Text
                            mx={2}
                            cursor="pointer"
                            _hover={{ textDecoration: "underline" }}
                        >
                            {link.name}
                        </Text>
                    </Link>
                </Flex>
            ))}
        </Flex>
    );
}

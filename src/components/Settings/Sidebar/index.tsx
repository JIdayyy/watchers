import { Flex, Select, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import settingLinks from "src/config/settingsLinks";

export default function Sidebar(): JSX.Element {
    const { push } = useRouter();

    // const containsAll = (link: ISettingLink) => {
    //     return asPath.split("/").some((element) => {
    //         if (element === "settings") {
    //             return false;
    //         }
    //         return (
    //             link.path.split("/").includes(element) && element !== "settings"
    //         );
    //     });
    // };

    return (
        <Flex w="full" h="full" direction="column">
            <Flex
                direction="column"
                w="full"
                h="full"
                display={["none", "none", "flex", "flex"]}
            >
                {settingLinks.map((link) => (
                    <Link key={link.id} href={link.path}>
                        <Flex
                            my={2}
                            _hover={{
                                textDecoration: "underline",
                                bg: "gray.200",
                            }}
                            // bg={containsAll(link) ? "white" : "transparent"}
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
            </Flex>
            <Select
                my={5}
                bg="white"
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    push(e.target.value)
                }
                display={["block", "block", "none", "none"]}
                w="full"
            >
                {settingLinks.map((link) => (
                    <option value={link.path}>{link.name}</option>
                ))}
            </Select>
        </Flex>
    );
}

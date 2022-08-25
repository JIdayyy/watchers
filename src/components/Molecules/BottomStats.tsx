import { Flex, Text } from "@chakra-ui/react";

export default function BottomStats(): JSX.Element {
    return (
        <Flex
            direction="column"
            h="200px"
            w="full"
            justifyContent="center"
            alignItems="center"
        >
            <Flex direction="column" w="full" h="full" maxW="7xl">
                <Text fontSize="xs">WHO IS ONLINE</Text>
                <Text fontSize="xs">
                    In total there are 37 users online :: 3 registered, 34
                    guests (based on users active over the past 1 minute)
                </Text>
                <Text fontSize="xs">
                    Most users ever online was 1683 on May 13th, 2015, 2:46 am
                </Text>
            </Flex>
            <Flex direction="column" w="full" h="full" maxW="7xl">
                <Text fontSize="xs">STATISTICS</Text>
                <Text fontSize="xs">
                    Total posts 462607 • Total topics 123066 • Total members
                    115529 • Our newest member plbolo9
                </Text>
            </Flex>
        </Flex>
    );
}

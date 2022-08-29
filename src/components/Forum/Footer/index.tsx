import { Flex, Text } from "@chakra-ui/react";

export default function ForumFooter(): JSX.Element {
    return (
        <Flex mb={10} direction="column" w="full" maxW="7xl">
            <Text
                w="full"
                borderBottom="1px"
                borderColor="gray.400"
                fontWeight="bold"
                fontSize={12}
            >
                WHO IS ONLINE ?
            </Text>
            <Text fontSize={12}>
                In total there are 37 users online :: 3 registered, 34 guests
                (based on users active over the past 1 minute)
            </Text>
            <Text fontSize={12}>
                Most users ever online was 1683 on May 13th, 2015, 2:46 am
            </Text>
            <Text
                mt={5}
                w="full"
                borderBottom="1px"
                borderColor="gray.400"
                fontWeight="bold"
                fontSize={12}
            >
                STATISTICS
            </Text>
            <Text fontSize={12}>
                Total posts 462607 • Total topics 123066 • Total members 115529
                • Our newest member plbolo9
            </Text>
        </Flex>
    );
}

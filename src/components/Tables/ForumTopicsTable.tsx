import {
    GetAllForumsQuery,
    GetTopicsByForumCategoryQuery,
} from "src/generated/graphql";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Text,
    useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

type Props = {
    topics: GetTopicsByForumCategoryQuery["topics"];
};

export default function ForumTopicsTable({ topics }: Props): JSX.Element {
    const { push } = useRouter();
    const { colorMode } = useColorMode();

    return (
        <TableContainer
            my={10}
            border={colorMode === "dark" ? "" : "#D6D6D6"}
            rounded={5}
            w="full"
        >
            <Table w="full" variant="simple">
                <Thead
                    bg={colorMode === "dark" ? "gray.600" : "black"}
                    w="full"
                >
                    <Tr>
                        <Th color="white">Topics</Th>
                        <Th color="white">Posts</Th>
                        <Th color="white">Last Post</Th>
                        <Th color="white">Last Post</Th>
                    </Tr>
                </Thead>
                <Tbody
                    bg={colorMode === "dark" ? "gray.800" : "white"}
                    w="full"
                >
                    {topics.map((topic) => (
                        <Tr w="full">
                            <Td
                                onClick={() =>
                                    push(`/forum/topics/${topic.id}`)
                                }
                                fontWeight={600}
                                w="full"
                                _hover={{ textDecor: "underline" }}
                                cursor="pointer"
                            >
                                <Text>{topic.name}</Text>
                            </Td>
                            <Td w="full" fontWeight={400}>
                                0
                            </Td>
                            <Td w="full" fontWeight={400}>
                                0
                            </Td>
                            <Td w="full" fontWeight={400}>
                                Last post
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}

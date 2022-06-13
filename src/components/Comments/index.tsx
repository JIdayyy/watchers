import { Flex, Text } from "@chakra-ui/react";
import CommentList from "@components/Lists/Comments/CommentList";
import CreateComment from "@components/Comments/CreateComment";

export default function Comments(): JSX.Element {
    return (
        <Flex
            p={5}
            mt="100px"
            w="full"
            minH="500px"
            justifyContent="center"
            alignItems="flex-start"
            direction="column"
        >
            <Text fontSize="24px" fontWeight="bold">
                Comments
            </Text>
            <CreateComment />
            <CommentList />
        </Flex>
    );
}

import { Flex, Text } from "@chakra-ui/react";
import CommentList from "@components/Lists/Comments/CommentList";
import CreateComment from "@components/Comments/CreateComment";
import { useSelector } from "react-redux";
import { RootState } from "@redux/reducers";

export default function Comments(): JSX.Element {
    const { user } = useSelector((state: RootState) => state.user);
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
            {user.id && <CreateComment />}
            <CommentList />
        </Flex>
    );
}

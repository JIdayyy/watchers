import { Flex, Text } from "@chakra-ui/react";
import CommentCard from "@components/Comments/CommentCard";
import { useRouter } from "next/router";
import { useGetAllPostCommentsQuery } from "src/generated/graphql";

interface IProps {
    parentId: string;
}

export default function ReplyList({ parentId }: IProps): JSX.Element {
    const { query } = useRouter();
    const { data } = useGetAllPostCommentsQuery({
        variables: {
            where: {
                postSlug: {
                    equals: query.slug as string,
                },
                parent_id: {
                    equals: parentId,
                },
            },
        },
    });

    if (data?.comments.length === 0) {
        return (
            <Flex my={3} align="center" justify="flex-start" w="full">
                <Text>No comments yet</Text>
            </Flex>
        );
    }

    return (
        <Flex direction="column" w="full">
            {data?.comments.map((comment) => (
                <CommentCard comment={comment} />
            ))}
        </Flex>
    );
}

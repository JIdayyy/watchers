import { Flex } from "@chakra-ui/react";
import CommentCard from "@components/Comments/CommentCard";
import { useRouter } from "next/router";
import { useGetAllPostCommentsQuery } from "src/generated/graphql";

export default function CommentList(): JSX.Element {
    const { query } = useRouter();
    const { data } = useGetAllPostCommentsQuery({
        variables: {
            where: {
                postSlug: {
                    equals: query.slug as string,
                },
            },
        },
    });

    return (
        <Flex direction="column" w="full">
            {data?.comments.map((comment) => (
                <CommentCard comment={comment} />
            ))}
        </Flex>
    );
}

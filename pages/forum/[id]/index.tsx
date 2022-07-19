import { Flex } from "@chakra-ui/react";
import ForumLayout from "@components/Layouts/ForumLayout";
import ForumTopicsTable from "@components/Tables/ForumTopicsTable";
import { useRouter } from "next/router";
import { useGetTopicsByForumCategoryQuery } from "src/generated/graphql";

export default function Topics(): JSX.Element {
    const router = useRouter();

    const { data } = useGetTopicsByForumCategoryQuery({
        variables: {
            where: {
                forum_category: {
                    is: {
                        id: {
                            equals: router.query.id as string,
                        },
                    },
                },
            },
        },
    });

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <Flex maxW="7xl" w="full" h="full" direction="column">
            <ForumTopicsTable topics={data?.topics} />
        </Flex>
    );
}

Topics.Layout = ForumLayout;

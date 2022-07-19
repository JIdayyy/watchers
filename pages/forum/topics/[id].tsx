import { Flex } from "@chakra-ui/react";
import ForumLayout from "@components/Layouts/ForumLayout";
import MainLayout from "@components/Layouts/MainLayout";
import { useRouter } from "next/router";
import React from "react";
import { useGetArticleDataQuery } from "src/generated/graphql";

export default function Topic(): JSX.Element {
    const { query } = useRouter();
    const { data } = useGetArticleDataQuery({
        variables: {
            where: {
                id: {
                    equals: query.id as string,
                },
            },
        },
    });
    console.log(data);
    return (
        <Flex w="full" bg="gray.600">
            {data?.articles.map((article) => (
                <Flex>{article.name}</Flex>
            ))}
        </Flex>
    );
}

Topic.Layout = ForumLayout;

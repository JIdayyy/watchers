import MainLayout from "@components/Layouts/MainLayout";
import { useRouter } from "next/router";
import React from "react";
import { useGetPostDataQuery } from "src/generated/graphql";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Watch(): JSX.Element {
    const router = useRouter();
    const { slug } = router.query;
    const { data } = useGetPostDataQuery({
        variables: {
            where: {
                slug: slug as string,
            },
        },
    });

    if (!data) return <Spinner />;
    console.log(data.post.cover_picture);
    return (
        <Flex w="7xl">
            <Image
                priority
                src={data?.post.cover_picture as string}
                width={50}
                height={50}
            />
            <Text
                dangerouslySetInnerHTML={{
                    __html: data?.post.content as string,
                }}
            />
        </Flex>
    );
}

Watch.Layout = MainLayout;

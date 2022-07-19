import { Box, Flex } from "@chakra-ui/react";
import ForumLayout from "@components/Layouts/ForumLayout";
import MainLayout from "@components/Layouts/MainLayout";
import ForumList from "@components/Lists/Forums/ForumList";
import ForumBreadScrumbs from "@components/Molecules/ForumBreadScrumbs";
import { GetServerSidePropsResult } from "next";
import Image from "next/image";
import { apolloClient } from "pages/_app";
import { GetAllForumsDocument, GetAllForumsQuery } from "src/generated/graphql";

interface IProps {
    forums: GetAllForumsQuery["forums"];
}

export default function Forum({ forums }: IProps): JSX.Element {
    return (
        <Flex
            justifyContent="flex-start"
            alignItems="center"
            direction="column"
            w="full"
            h="full"
        >
            <ForumList forums={forums} />
        </Flex>
    );
}

export const getServerSideProps = async (): Promise<
    GetServerSidePropsResult<IProps>
> => {
    const data = await apolloClient.query({
        query: GetAllForumsDocument,
    });

    return {
        props: {
            forums: data.data.forums,
        },
    };
};

Forum.Layout = ForumLayout;

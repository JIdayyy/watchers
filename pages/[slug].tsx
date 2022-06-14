import MainLayout from "@components/Layouts/MainLayout";
import React, { useEffect } from "react";
import {
    GetAllPostsDocument,
    GetAllPostsQuery,
    GetPostDataDocument,
    GetPostDataQuery,
} from "src/generated/graphql";
import { Flex, Grid, GridItem, Spinner, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import { apolloClient } from "./_app";
import { GetStaticPropsResult } from "next/types";
import hljs from "highlight.js";
import Comments from "@components/Comments";
import { NextSeo } from "next-seo";

interface IProps {
    post: GetPostDataQuery["post"];
}

export default function Watch({ post }: IProps): JSX.Element {
    if (!post) return <Spinner />;

    useEffect(() => {
        hljs.highlightAll();
        const code = document.querySelectorAll("pre");
        if (!code) {
            return;
        }
        code.forEach((el) => {
            el.innerHTML = `<code class="hljs">${
                hljs.highlightAuto(el.innerHTML, ["javascript"]).value
            }</code>`;
        });
    }, []);

    const SEO = {
        title: post.title,
        titleTemplate: `%s | ${post.title}`,
        defaultTitle: "Tech Watchers",
        description: post.content,
    };

    return (
        <>
            <NextSeo {...SEO} title="About Me" />

            <Grid
                alignItems="start"
                w="7xl"
                px={[3, 2, 2, 0]}
                pb={10}
                gap={7}
                templateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(5, 1fr)",
                ]}
            >
                <GridItem colSpan={3}>
                    <Flex
                        bg="white"
                        shadow="base"
                        rounded="md"
                        overflow="hidden"
                        direction="column"
                        pb="30px"
                    >
                        <Flex position="relative" w="full" h="250px">
                            {post.cover_picture && (
                                <Image
                                    objectFit="cover"
                                    priority
                                    src={post.cover_picture as string}
                                    layout="fill"
                                />
                            )}
                        </Flex>
                        <Flex
                            direction="column"
                            p={5}
                            w="full"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Text as="p">
                                {post.author.first_name} {post.author.last_name}
                            </Text>
                            <Text my={4} as="h1">
                                {post.title}
                            </Text>
                            <Flex my={4}>
                                {post.Tags.map((tag) => (
                                    <Text
                                        key={tag.id}
                                        mr={1}
                                        as="p"
                                        fontSize="16px"
                                    >
                                        #{tag.name}
                                    </Text>
                                ))}
                            </Flex>
                            <Text
                                fontSize="18px"
                                className=""
                                w="full"
                                dangerouslySetInnerHTML={{
                                    __html: post.content as string,
                                }}
                            />
                        </Flex>
                        <Comments />
                    </Flex>
                </GridItem>
                <GridItem
                    alignSelf="start"
                    position="sticky"
                    top="110px"
                    display="flex"
                    flexDir="column"
                    colSpan={2}
                >
                    <Flex
                        bg="white"
                        shadow="base"
                        rounded="md"
                        flexDirection="column"
                        w="full"
                        direction="column"
                        overflow="hidden"
                    >
                        <Box w="full" h="50px" bg="black" />
                        <Flex direction="column" w="full" h="full" p={5}>
                            <Text as="h2">
                                Watchers is made by love by our wonderful
                                community
                            </Text>
                            <Text as="p">
                                We are proud to release our brand new website on
                                the internet
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                        p={5}
                        my={5}
                        shadow="base"
                        rounded="md"
                        direction="column"
                        w="full"
                        bg="white"
                    >
                        <Flex flexWrap="wrap">
                            <Text as="h2" fontWeight="bold">
                                Want to see other
                            </Text>
                            <Text mx={1} as="h2" color="blue">
                                Jidayyy
                            </Text>
                            <Text as="h2" fontWeight="bold">
                                watches ?
                            </Text>
                        </Flex>
                    </Flex>
                </GridItem>
            </Grid>
        </>
    );
}

export async function getStaticPaths(): Promise<{
    paths: { params: { slug: string } }[];
    fallback: boolean | string;
}> {
    const allPosts = await apolloClient.query({
        query: GetAllPostsDocument,
        variables: {
            where: {
                isDraft: {
                    equals: false,
                },
            },
        },
    });

    const paths = allPosts.data?.posts.map(
        (post: GetAllPostsQuery["posts"][number]) => ({
            params: {
                slug: post.slug,
            },
        }),
    );

    if (!paths) return { paths: [], fallback: true };

    return {
        paths,
        fallback: "blocking", // false or 'blocking'
    };
}

export async function getStaticProps(params: {
    params: {
        slug: string;
    };
}): Promise<GetStaticPropsResult<IProps>> {
    const { slug } = params.params;

    const res = await apolloClient.query({
        query: GetPostDataDocument,
        variables: {
            where: {
                slug: slug,
            },
        },
    });
    return {
        props: {
            post: res.data.post,
        },
        revalidate: 10,
    };
}

Watch.Layout = MainLayout;

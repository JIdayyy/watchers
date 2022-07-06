import MainLayout from "@components/Layouts/MainLayout";
import React, { useEffect } from "react";
import {
    GetAllLikesDocument,
    GetAllPostsDocument,
    GetAllPostsQuery,
    GetPostDataDocument,
    GetPostDataQuery,
    useGetAllLikesQuery,
    useSetLikeMutation,
} from "src/generated/graphql";
import { AiFillLike } from "react-icons/ai";
import {
    Flex,
    Grid,
    GridItem,
    Spinner,
    Text,
    Icon,
    Button,
} from "@chakra-ui/react";
import Image from "next/image";
import { apolloClient } from "./_app";
import { GetStaticPropsResult } from "next/types";
import hljs from "highlight.js";
import Comments from "@components/Comments";
import { NextSeo } from "next-seo";
import { useSelector } from "react-redux";
import { RootState } from "@redux/reducers";
import UserDetailsPostCard from "@components/Cards/UserDetailsPostCard";
import CustomBox from "@definitions/chakra/theme/components/Box/CustomBox";

interface IProps {
    post: GetPostDataQuery["post"];
}

export default function Watch({ post }: IProps): JSX.Element {
    if (!post) return <Spinner />;
    const [setLike, { loading }] = useSetLikeMutation();
    const { user } = useSelector((state: RootState) => state.user);

    const { data } = useGetAllLikesQuery({
        notifyOnNetworkStatusChange: true,

        variables: {
            where: {
                post_id: {
                    equals: post.id,
                },
            },
        },
    });

    useEffect(() => {
        hljs.highlightAll();
        const code = document.querySelectorAll("pre");
        if (!code) {
            return;
        }
        code.forEach((el) => {
            el.innerHTML = `<code class="hljs">${hljs
                .highlightAuto(el.innerHTML, ["javascript"])
                .value.replaceAll("&amp;gt;", ">")
                .replaceAll("&amp;lt;", "<")}</code>`;
        });
    }, []);

    const handleClick = () => {
        setLike({
            notifyOnNetworkStatusChange: true,
            variables: {
                data: {
                    post: {
                        connect: { id: post.id },
                    },
                    user: {
                        connect: {
                            id: user.id,
                        },
                    },
                },
            },
            refetchQueries: [
                {
                    query: GetAllLikesDocument,
                    variables: {
                        where: {
                            post_id: {
                                equals: post.id,
                            },
                        },
                    },
                },
            ],
        });
    };

    const SEO = {
        title: post.title,
        titleTemplate: `Tech Watchers | ${post.title}`,
        defaultTitle: "Tech Watchers",
        description: post.content,
        openGraph: {
            type: "website",
            locale: "en_IE",
            url: `https://tech-watchers.vercel.app/${post.slug}`,
            site_name: "Tech Watchers",
            images: [
                {
                    url: post.cover_picture,
                    width: 800,
                    height: 420,
                    alt: "post cover",
                },
            ],
        },
    };

    console.log(loading);

    return (
        <>
            <NextSeo {...SEO} title="About Me" />

            <Grid
                alignItems="start"
                minW={["full", "full", "full", "7xl"]}
                maxW="7xl"
                px={[0, 0, 2, 0]}
                pb={10}
                gap={[0, 0, 7]}
                templateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(5, 1fr)",
                ]}
            >
                <GridItem colSpan={[5, 3]}>
                    <CustomBox
                        display="flex"
                        border="1px solid #D6D6D6"
                        rounded={[0, 0, "md"]}
                        overflow="hidden"
                        flexDirection="column"
                        pb="30px"
                    >
                        {post.cover_picture && (
                            <Flex position="relative" w="full" h="250px">
                                <Image
                                    objectFit="cover"
                                    priority
                                    src={post.cover_picture as string}
                                    layout="fill"
                                />
                            </Flex>
                        )}
                        <Flex
                            direction="column"
                            p={5}
                            px={5}
                            w="full"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Flex
                                alignItems="center"
                                w="full"
                                justifyContent="space-between"
                            >
                                <Text as="p">
                                    {post.author.first_name}{" "}
                                    {post.author.last_name}
                                </Text>
                                <Button
                                    isLoading={loading}
                                    size="sm"
                                    onClick={handleClick}
                                    mr={5}
                                >
                                    <Icon mr={1} as={AiFillLike} size={10} />
                                    {data?.likes.length} Likes
                                </Button>
                            </Flex>
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
                    </CustomBox>
                </GridItem>
                <GridItem
                    alignSelf="start"
                    position="sticky"
                    display="flex"
                    flexDir="column"
                    colSpan={[5, 2]}
                    w="full"
                >
                    <UserDetailsPostCard author={post.author} />
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

import MainLayout from "@components/Layouts/MainLayout";
import { useRouter } from "next/router";
import React from "react";
import { useGetPostDataQuery } from "src/generated/graphql";
import { Flex, Grid, GridItem, Spinner, Text, Box } from "@chakra-ui/react";
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
    console.log(data.post.Tags);
    return (
        <Grid
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
                    shadow="base"
                    rounded="md"
                    overflow="hidden"
                    direction="column"
                >
                    <Flex position="relative" w="full" h="250px">
                        {data.post.cover_picture && (
                            <Image
                                objectFit="cover"
                                priority
                                src={data?.post.cover_picture as string}
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
                            {data.post.author.first_name}{" "}
                            {data.post.author.last_name}
                        </Text>
                        <Text my={4} as="h1">
                            {data.post.title}
                        </Text>
                        <Flex my={4}>
                            {data.post.Tags.map((tag) => (
                                <Text mr={1} as="p">
                                    #{tag.name}
                                </Text>
                            ))}
                        </Flex>
                        <Text
                            w="full"
                            dangerouslySetInnerHTML={{
                                __html: data?.post.content as string,
                            }}
                        />
                    </Flex>
                </Flex>
            </GridItem>
            <GridItem display="flex" flexDir="column" colSpan={2}>
                <Flex
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
                            Watchers is made by love by our wonderful community
                        </Text>
                        <Text as="p">
                            We are proud to release our brand new website on the
                            internet
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
    );
}

Watch.Layout = MainLayout;

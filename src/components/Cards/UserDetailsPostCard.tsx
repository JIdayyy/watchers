import {
    Box,
    Button,
    Flex,
    SkeletonCircle,
    SkeletonText,
    Text,
    useColorMode,
} from "@chakra-ui/react";
import CustomBox from "@definitions/chakra/theme/components/Box/CustomBox";
import Image from "next/image";
import { useRouter } from "next/router";
import {
    GetPostDataQuery,
    SortOrder,
    useGetAllPostsQuery,
} from "src/generated/graphql";

interface IProps {
    author: GetPostDataQuery["post"]["author"];
}

export default function UserDetailsPostCard({ author }: IProps): JSX.Element {
    const { push } = useRouter();
    const { colorMode } = useColorMode();
    const { data, loading } = useGetAllPostsQuery({
        variables: {
            where: {
                userId: {
                    equals: author.id,
                },
            },
            orderBy: {
                created_at: SortOrder.Desc,
            },
        },
    });

    const handleClick = (slug: string) => {
        push(`/${slug}`);
    };

    if (loading)
        return (
            <CustomBox rounded="md" w="full" padding={10} shadow="base">
                <SkeletonCircle size="10" />
                <SkeletonText height="40px" mt="2" noOfLines={2} spacing="2" />
                <SkeletonText height="40px" mt="2" noOfLines={2} spacing="2" />
                <SkeletonText height="40px" mt="2" noOfLines={2} spacing="2" />
                <SkeletonText height="40px" mt="2" noOfLines={2} spacing="2" />
                <SkeletonText height="40px" mt="2" noOfLines={2} spacing="2" />
                <SkeletonText height="40px" mt="2" noOfLines={2} spacing="2" />
            </CustomBox>
        );

    return (
        <CustomBox
            display="flex"
            flexDir="column"
            justifyContent="space-between"
            w="full"
            overflow="hidden"
            rounded="md"
            shadow="base"
        >
            <Box
                w="full"
                h="30px"
                bg={colorMode === "light" ? "black" : "orange"}
            ></Box>
            <Flex
                p={5}
                direction="column"
                justifyContent="space-between"
                w="full"
            >
                <Flex justifyContent="flex-start" alignItems="center" w="full">
                    <Box
                        width={10}
                        height={10}
                        overflow="hidden"
                        position="relative"
                        rounded="full"
                    >
                        <Image src={author.avatar} layout="fill" />
                    </Box>
                    <Text fontSize="30px" fontWeight="bold" ml={5}>
                        {author.nickname}
                    </Text>
                </Flex>
                <Button my={4} variant="action">
                    FOLLOW
                </Button>
                {data?.posts.map((watch) => (
                    <Flex
                        rounded="md"
                        cursor="pointer"
                        onClick={() => handleClick(watch.slug)}
                        py={4}
                        w="full"
                        direction="column"
                    >
                        <Text>{watch.title}</Text>
                        <Flex w="full">
                            {watch.Tags.map((tag) => (
                                <Text mr={1}>#{tag.name}</Text>
                            ))}
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </CustomBox>
    );
}

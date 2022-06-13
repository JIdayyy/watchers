import {
    Box,
    Button,
    Flex,
    SkeletonCircle,
    SkeletonText,
    Textarea,
} from "@chakra-ui/react";
import { RootState } from "@redux/reducers";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import {
    GetAllPostCommentsDocument,
    useCreateCommentMutation,
} from "src/generated/graphql";

interface FormData {
    content: string;
}

export default function CreateComment(): JSX.Element {
    const { user } = useSelector((state: RootState) => state.user);
    const { query } = useRouter();
    const [createComment, { loading }] = useCreateCommentMutation();
    const { register, handleSubmit, reset } = useForm<FormData>();

    if (!user.avatar) {
        return (
            <Box w="full" padding="6" boxShadow="lg" bg="white">
                <SkeletonCircle size="10" />
                <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </Box>
        );
    }

    const onSubmit = async (data: FieldValues) => {
        createComment({
            variables: {
                data: {
                    author: {
                        connect: {
                            id: user.id,
                        },
                    },
                    content: data.content,
                    Post: {
                        connect: {
                            slug: query.slug as string,
                        },
                    },
                },
            },
            refetchQueries: [
                {
                    query: GetAllPostCommentsDocument,
                    variables: {
                        where: {
                            postSlug: {
                                equals: query.slug as string,
                            },
                        },
                    },
                },
            ],
            onCompleted: () => {
                reset();
            },
        });
    };

    return (
        <Flex
            my={5}
            w="full"
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <Flex w="full">
                <Box
                    mr={2}
                    overflow="hidden"
                    width={35}
                    height={35}
                    position="relative"
                    rounded="full"
                >
                    <Image layout="fill" src={user.avatar} />
                </Box>
                <Flex
                    w="full"
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                >
                    <Textarea
                        minH="150px"
                        placeholder="Add your comment here... 🤗"
                        {...register("content")}
                    />
                    <Button
                        bg="blue.400"
                        color="white"
                        isLoading={loading}
                        my={1}
                        onClick={handleSubmit(onSubmit)}
                    >
                        Submit
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
}

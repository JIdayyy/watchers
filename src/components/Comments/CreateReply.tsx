import { Button, Flex, Textarea } from "@chakra-ui/react";
import { RootState } from "@redux/reducers";
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

interface IProps {
    parentId: string;
}

export default function CreateReply({ parentId }: IProps): JSX.Element {
    const { user } = useSelector((state: RootState) => state.user);
    const { query } = useRouter();
    const [createComment, { loading }] = useCreateCommentMutation();
    const { register, handleSubmit, reset } = useForm<FormData>();

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
                    parent_id: parentId,
                    repliesRelation: {
                        connect: [
                            {
                                id: parentId,
                            },
                        ],
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
                            parent_id: {
                                equals: parentId,
                            },
                        },
                    },
                },
                {
                    query: GetAllPostCommentsDocument,
                    variables: {
                        where: {
                            postSlug: {
                                equals: query.slug as string,
                            },
                            parent_id: {
                                equals: null,
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
        <>
            {user.id && (
                <Flex
                    minW="400px"
                    my={5}
                    w="full"
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Flex w="full">
                        <Flex
                            w="full"
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start"
                        >
                            <Textarea
                                minH="150px"
                                placeholder="Add your reaction here... 🤗"
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
            )}
        </>
    );
}

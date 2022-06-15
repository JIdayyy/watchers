import { Box, Button, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { DateTime } from "luxon";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import {
    GetAllPostCommentsQuery,
    useGetAllPostCommentsQuery,
} from "src/generated/graphql";
import CreateReply from "./CreateReply";
import { AiFillLike } from "react-icons/ai";
import { TbMessageCircle2 } from "react-icons/tb";
import { VscFold } from "react-icons/vsc";

interface IProps {
    comment: GetAllPostCommentsQuery["comments"][number];
}

export default function CommentCard({ comment }: IProps): JSX.Element {
    const date = DateTime.fromJSDate(new Date(comment.created_at));
    const [isReplyForm, setIsReplyForm] = useState(false);
    const { query } = useRouter();
    const [showReplies, setShowReplies] = useState(true);

    const { data } = useGetAllPostCommentsQuery({
        variables: {
            where: {
                postSlug: {
                    equals: query.slug as string,
                },
                parent_id: {
                    equals: comment.id,
                },
            },
        },
        onCompleted: () => {
            setIsReplyForm(false);
        },
    });

    return (
        <Flex alignItems="flex-end" direction="column" w="full">
            <Flex
                direction="column"
                w="full"
                justifyContent="flex-end"
                alignItems="flex-end"
            >
                <Flex my={2} w="full">
                    <Flex
                        h="full"
                        w="10%"
                        justifyContent="center"
                        alignItems="center"
                        direction="column"
                    >
                        <Box
                            overflow="hidden"
                            width={35}
                            height={35}
                            position="relative"
                            rounded="full"
                        >
                            <Image layout="fill" src={comment.author.avatar} />
                        </Box>
                        <Button
                            onClick={() => setShowReplies((c) => !c)}
                            mt={2}
                            size="sm"
                            bg="transparent"
                            _hover={{ backgroundColor: "#F2F2F2" }}
                        >
                            <Icon as={VscFold} size={15} />
                        </Button>
                    </Flex>
                    <Flex
                        w="full"
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                    >
                        <Flex
                            direction="column"
                            p={3}
                            w="full"
                            rounded="md"
                            border="1px solid #D4D4D4"
                        >
                            <Flex>
                                <Text fontWeight="bold" mr={2}>
                                    {comment.author.nickname}
                                </Text>
                                <Text>
                                    {date.day} {date.monthShort} {date.year}
                                </Text>
                            </Flex>
                            <Flex direction="column" w="full">
                                <Text
                                    fontSize="18px"
                                    mt={3}
                                    dangerouslySetInnerHTML={{
                                        __html: comment.content,
                                    }}
                                />
                            </Flex>
                        </Flex>
                        <HStack spacing={2}>
                            <Button
                                size="sm"
                                bg="transparent"
                                py="0px"
                                _hover={{ backgroundColor: "#F2F2F2" }}
                                fontSize="12px"
                                mt={1}
                            >
                                <Icon mr={1} as={AiFillLike} size={10} /> Like
                            </Button>
                            <Button
                                size="sm"
                                bg="transparent"
                                _hover={{ backgroundColor: "#F2F2F2" }}
                                py="0px"
                                fontSize="12px"
                                mt={1}
                                onClick={() => setIsReplyForm((c) => !c)}
                            >
                                <Icon mr={1} as={TbMessageCircle2} size={10} />{" "}
                                Reply
                            </Button>
                        </HStack>
                        {isReplyForm && <CreateReply parentId={comment.id} />}
                    </Flex>
                </Flex>
            </Flex>
            {showReplies && (
                <Flex direction="column" w="95%" minW="400px">
                    {data?.comments.map((comment) => (
                        <CommentCard comment={comment} />
                    ))}
                </Flex>
            )}
        </Flex>
    );
}

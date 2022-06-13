import { Box, Flex, Text } from "@chakra-ui/react";
import { DateTime } from "luxon";
import Image from "next/image";
import { GetAllPostCommentsQuery } from "src/generated/graphql";

interface IProps {
    comment: GetAllPostCommentsQuery["comments"][number];
}

export default function CommentCard({ comment }: IProps): JSX.Element {
    const date = DateTime.fromJSDate(new Date(comment.created_at));

    return (
        <Flex my={2} w="full">
            <Flex h="full" justifyContent="flex-start" alignItems="flex-start">
                <Box
                    mr={2}
                    overflow="hidden"
                    width={35}
                    height={35}
                    position="relative"
                    rounded="full"
                >
                    <Image layout="fill" src={comment.author.avatar} />
                </Box>
            </Flex>
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
                <Text
                    fontSize="18px"
                    mt={3}
                    dangerouslySetInnerHTML={{ __html: comment.content }}
                />
            </Flex>
        </Flex>
    );
}

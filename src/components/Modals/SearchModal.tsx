import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Input,
    InputGroup,
    InputRightElement,
    Flex,
    Text,
    useColorMode,
    Spinner,
} from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";

import React, { ChangeEvent } from "react";
import { useSearchLazyQuery } from "src/generated/graphql";
import { useRouter } from "next/router";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export default function SearchModal({ isOpen, onClose }: Props): JSX.Element {
    const [search, { data, loading }] = useSearchLazyQuery();
    const { push } = useRouter();
    const { colorMode } = useColorMode();

    const handleSearch = (value: string) => {
        search({
            variables: {
                search: {
                    searchValue: value,
                },
            },
        });
    };

    return (
        <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    p={0}
                >
                    <InputGroup>
                        <InputRightElement children={<BiSearchAlt />} />
                        <Input
                            size="lg"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                handleSearch(e.target.value)
                            }
                            w="full"
                            placeholder="Search something"
                        />
                    </InputGroup>
                    {loading && <Spinner />}
                    {data && (
                        <Flex
                            direction="column"
                            overflowY="auto"
                            maxH="500px"
                            w="full"
                            p={3}
                        >
                            {data.search.map((result) => (
                                <Flex
                                    my={1}
                                    bg={
                                        colorMode == "dark"
                                            ? "gray.800"
                                            : "gray.200"
                                    }
                                    cursor="pointer"
                                    rounded="md"
                                    _hover={{
                                        backgroundColor:
                                            colorMode == "dark"
                                                ? "gray.600"
                                                : "gray.100",
                                    }}
                                    justifyContent="space-between"
                                    w="full"
                                    p={3}
                                >
                                    <Text
                                        w="full"
                                        isTruncated
                                        _hover={{ textDecoration: "underline" }}
                                        onClick={() => {
                                            onClose();
                                            push(`/${result.slug}`);
                                        }}
                                    >
                                        {result.title}
                                    </Text>
                                    <Flex>
                                        {result.Tags.map((tag) => (
                                            <Text ml={1}>#{tag.name}</Text>
                                        ))}
                                    </Flex>
                                </Flex>
                            ))}
                        </Flex>
                    )}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

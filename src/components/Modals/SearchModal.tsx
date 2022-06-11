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
} from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";

import React, { ChangeEvent, useState } from "react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const fakeResults = [
    {
        id: 1,
        title: "Super post",
        description: "This is a super post",
        tags: [
            {
                id: 1,
                name: "super",
            },
            {
                id: 2,
                name: "post",
            },
        ],
    },
    {
        id: 2,
        title: "Super post",
        description: "This is a super post",
        tags: [
            {
                id: 1,
                name: "super",
            },
            {
                id: 2,
                name: "post",
            },
        ],
    },
];

export default function SearchModal({ isOpen, onClose }: Props): JSX.Element {
    const [value, setValue] = useState("");

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
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
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setValue(e.target.value)
                            }
                            value={value}
                            w="full"
                            placeholder="Search something"
                        />
                    </InputGroup>
                    {value && (
                        <Flex
                            direction="column"
                            overflowY="auto"
                            maxH="500px"
                            w="full"
                            p={3}
                        >
                            {/* <Spinner /> */}
                            {fakeResults.map((result) => (
                                <Flex
                                    cursor="pointer"
                                    rounded={3}
                                    _hover={{ backgroundColor: "gray.200" }}
                                    justifyContent="space-between"
                                    w="full"
                                    p={3}
                                >
                                    <Text>{result.title}</Text>
                                    <Flex>
                                        {result.tags.map((tag) => (
                                            <Text mx={1}>#{tag.name}</Text>
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

import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Text,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { useGetAllCategoriesQuery } from "src/generated/graphql";

interface IProps {
    setSelectedCategory: Dispatch<SetStateAction<string>>;
}

export default function CategoriesModal({
    setSelectedCategory,
}: IProps): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { data } = useGetAllCategoriesQuery();

    return (
        <>
            <Button onClick={onOpen}>Select a category</Button>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Select a Category</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        overflowY="auto"
                        h="full"
                        display="flex"
                        flexDirection="column"
                    >
                        {data?.categories.map((category) => (
                            <Text
                                onClick={() => setSelectedCategory(category.id)}
                                cursor="pointer"
                                rounded="md"
                                px={2}
                                _hover={{ backgroundColor: "gray.200" }}
                            >
                                {category.name}
                            </Text>
                        ))}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

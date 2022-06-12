import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Text,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useGetAllCategoriesQuery } from "src/generated/graphql";

interface IProps {
    setSelectedCategory: Dispatch<SetStateAction<string>>;
    category: string;
}

export default function CategoriesModal({
    setSelectedCategory,
    category,
}: IProps): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { data } = useGetAllCategoriesQuery();

    useEffect(() => {
        onClose();
    }, [category]);

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
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                cursor="pointer"
                                rounded="md"
                                p={3}
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

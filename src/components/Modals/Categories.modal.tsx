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
import React, { Dispatch, SetStateAction } from "react";
import { useGetAllCategoriesQuery } from "src/generated/graphql";
import { mode } from "@chakra-ui/theme-tools";

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

    return (
        <>
            <Button onClick={onOpen}>
                {category
                    ? data?.categories.filter((cate) => cate.id === category)[0]
                          .name
                    : "Select a Category"}
            </Button>

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
                                onClick={async () => {
                                    await setSelectedCategory(category.id);
                                    onClose();
                                }}
                                cursor="pointer"
                                rounded="md"
                                p={3}
                                _hover={{
                                    backgroundColor: mode("#FFFFFF", "#000000"),
                                    color: mode("#000000", "#FFFFFF"),
                                }}
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

import { Flex, Button } from "@chakra-ui/react";
import React from "react";
import { FieldValues, useFormContext } from "react-hook-form";

interface IProps {
    onSubmit: (data: FieldValues) => void;
    isLoading: boolean;
}

export default function SaveSettingsButton({
    onSubmit,
    isLoading,
}: IProps): JSX.Element {
    const { handleSubmit } = useFormContext();
    return (
        <Flex
            w="full"
            rounded="md"
            bg="white"
            shadow="base"
            p={5}
            alignSelf="end"
            position="sticky"
            bottom={0}
        >
            <Button
                isLoading={isLoading}
                onClick={handleSubmit(onSubmit)}
                w="full"
                variant="action"
            >
                Save Settings
            </Button>
        </Flex>
    );
}

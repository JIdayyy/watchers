import { Button } from "@chakra-ui/react";
import CustomFlex from "@definitions/chakra/theme/components/Box/CustomFlex";
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
        <CustomFlex
            w="full"
            rounded="md"
            border="1px solid #D6D6D6"
            py={5}
            px={[5, 5, 10]}
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
        </CustomFlex>
    );
}

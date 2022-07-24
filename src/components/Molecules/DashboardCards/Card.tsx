import { Text, useColorMode } from "@chakra-ui/react";
import CustomBox from "@definitions/chakra/theme/components/Box/CustomBox";
import React from "react";

type Props = {
    number: number;
    title: string;
};

export default function Card({ number, title }: Props): JSX.Element {
    const { colorMode } = useColorMode();

    return (
        <CustomBox
            border={colorMode === "light" ? "1px solid #D6D6D6" : ""}
            rounded="md"
            display="flex"
            w="full"
            p={4}
            flexDirection="column"
            justifyContent="space-between"
        >
            <Text fontWeight="bold" fontSize={24}>
                {number}
            </Text>
            <Text color="gray.500" fontWeight="semibold">
                {title}
            </Text>
        </CustomBox>
    );
}

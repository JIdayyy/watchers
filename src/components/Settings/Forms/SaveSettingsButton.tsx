import { Flex, Button } from "@chakra-ui/react";
import React from "react";

export default function SaveSettingsButton(): JSX.Element {
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
            <Button w="full" variant="action">
                Save Settings
            </Button>
        </Flex>
    );
}

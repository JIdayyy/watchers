import { Flex } from "@chakra-ui/react";
import AdminLayout from "@components/Layouts/AdminLayout";
import React from "react";

export default function Admin(): JSX.Element {
    return (
        <Flex w="full" h="full">
            admin
        </Flex>
    );
}

Admin.Layout = AdminLayout;

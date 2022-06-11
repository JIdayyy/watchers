import { Flex } from "@chakra-ui/react";
import Navbar from "@components/Navbar";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function MainLayout({ children }: Props): JSX.Element {
    return (
        <Flex
            pt="110px"
            overflowY="scroll"
            w="100vw"
            minH="100vh"
            h="100vh"
            justifyContent="flex-start"
            alignItems="center"
            direction="column"
            bg="#FAF9F9"
        >
            <Navbar />
            {children}
        </Flex>
    );
}

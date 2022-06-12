import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps {
    children: ReactNode;
}

export default function NewWatchLayout({ children }: IProps): JSX.Element {
    return (
        <Flex justifyContent="center" bg="#FAF9F9" w="100vw" minH="100vh">
            {children}
        </Flex>
    );
}

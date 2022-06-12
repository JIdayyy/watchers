import { Flex } from "@chakra-ui/react";
import Navbar from "@components/Navbar";
import { RootState } from "@redux/reducers";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Role } from "src/generated/graphql";

type Props = {
    children: ReactNode;
};

export default function AdminLayout({ children }: Props): JSX.Element {
    const { user } = useSelector((state: RootState) => state.user);
    const router = useRouter();

    if (user.id && !user?.roles.includes(Role.Admin || Role.SuperAdmin)) {
        router.push("/");
    }

    return (
        <Flex
            w="100vw"
            minH="100vh"
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

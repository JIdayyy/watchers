import { Center, Flex, Spinner } from "@chakra-ui/react";
import Navbar from "@components/Navbar";
import { login, logout } from "@redux/actions";
import axios from "axios";
import { getToken } from "next-auth/jwt";
import { useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Role } from "src/generated/graphql";

type Props = {
    children: ReactNode;
};

export default function MainLayout({ children }: Props): JSX.Element {
    const dispatch = useDispatch();
    const session = useSession();

    useEffect(() => {
        console.log(session);
        if (session.status === "authenticated") {
            dispatch(
                login({
                    email: session.data?.email as string,
                    id: session.data.id as string,
                    avatar: session.data?.picture as string,
                    nickName:
                        (session.data?.nickname as string) ||
                        (session.data.name as string),
                    roles: session.data.roles as Role,
                }),
            );
        }

        if (session.status === "unauthenticated") {
            dispatch(logout());
        }
    }, [session]);

    if (session.status === "loading") {
        return (
            <Center w="100vw" h="100vh">
                <Spinner />
            </Center>
        );
    }

    return (
        <Flex
            pt="80px"
            w="100vw"
            h="100vh"
            justifyContent="flex-start"
            alignItems="center"
            direction="column"
        >
            <Navbar />
            {children}
        </Flex>
    );
}

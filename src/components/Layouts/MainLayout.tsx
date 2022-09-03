import { Center, Flex } from "@chakra-ui/react";
import Lantern from "@components/Lotties/Lantern/Lantern";
import Navbar from "@components/Navbar";
import { login, logout } from "@redux/actions";
import { useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Role, useLogoutMutation } from "src/generated/graphql";

type Props = {
    children: ReactNode;
};

export default function MainLayout({ children }: Props): JSX.Element {
    const dispatch = useDispatch();
    const session = useSession();
    const [logoutMutation] = useLogoutMutation();

    useEffect(() => {
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
            logoutMutation();
            dispatch(logout());
        }
    }, [session]);

    if (session.status === "loading") {
        return (
            <Center bg="#544A5F" w="100vw" h="100vh">
                <Lantern />
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

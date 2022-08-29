import { Center, Flex, Spinner, Text } from "@chakra-ui/react";
import DashboardCards from "@components/Molecules/DashboardCards";
import DashboardSidebar from "@components/Molecules/DashboardSidebar";
import Navbar from "@components/Navbar";
import { login, logout } from "@redux/actions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Role, useLogoutMutation } from "src/generated/graphql";

type Props = {
    children: ReactNode;
};

export default function DashboardLayout({ children }: Props): JSX.Element {
    const dispatch = useDispatch();
    const { push } = useRouter();
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
            push("/");
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
            w="100vw"
            h="full"
            justifyContent="flex-start"
            alignItems="center"
            direction="column"
        >
            <Flex h="full" w="full" maxW="7xl" direction="column">
                <Text fontWeight="bold" fontSize={34}>
                    Dashboard
                </Text>
                <DashboardCards />
                <Flex w="full" mt={10} h="full">
                    <DashboardSidebar />
                    <Flex flexGrow={1} direction="column" h="full">
                        <Text fontWeight="bold" fontSize={18}>
                            Posts:
                        </Text>
                        <Flex flexGrow={1}>{children}</Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

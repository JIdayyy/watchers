import { Box, Center, Flex, Spinner } from "@chakra-ui/react";
import Navbar from "@components/Navbar";
import { login, logout } from "@redux/actions";
import { RootState } from "@redux/reducers";
import { useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Role, useLogoutMutation } from "src/generated/graphql";
import Image from "next/image";
import ForumBreadScrumbs from "@components/Molecules/ForumBreadScrumbs";
import BottomStats from "@components/Molecules/BottomStats";

type Props = {
    children: ReactNode;
};

export default function ForumLayout({ children }: Props): JSX.Element {
    const dispatch = useDispatch();
    const { user } = useSelector((state: RootState) => state.user);
    const session = useSession();
    const [logoutMutation] = useLogoutMutation();

    useEffect(() => {
        if (session.status === "authenticated" && !user.id) {
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
            <Center w="100vw" h="100vh">
                <Spinner />
            </Center>
        );
    }

    return (
        <Flex
            pt="55px"
            w="100vw"
            h="100vh"
            justifyContent="flex-start"
            alignItems="center"
            direction="column"
        >
            <Navbar />
            <Box
                className="image-drop-contrast"
                position="relative"
                w="full"
                h="40vh"
            >
                <Image
                    objectFit="cover"
                    src="/images/forum_bg.webp"
                    layout="fill"
                />
            </Box>
            <ForumBreadScrumbs />

            {children}
            <BottomStats />
        </Flex>
    );
}

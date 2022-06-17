import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "@components/Navbar";
import Sidebar from "@components/Settings/Sidebar";
import { login, logout } from "@redux/actions";
import { RootState } from "@redux/reducers";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMutateMeMutation } from "src/generated/graphql";

type Props = {
    children: ReactNode;
};

export default function SettingsLayout({ children }: Props): JSX.Element {
    const { user } = useSelector((state: RootState) => state.user);
    const { push } = useRouter();

    const dispatch = useDispatch();

    const [me] = useMutateMeMutation({
        onCompleted: (data) => {
            dispatch(
                login({
                    avatar: data.me.avatar,
                    nickName: data.me.nickname,
                    id: data.me.id,
                    email: data.me.email,
                    roles: data.me.role,
                }),
            );
        },
        onError: () => {
            dispatch(logout());
            push("/");
        },
    });

    useEffect(() => {
        if (!user.id) {
            me();
        }
    }, []);

    return (
        <Flex
            pt="110px"
            w="100vw"
            h="100vh"
            justifyContent="flex-start"
            alignItems="center"
            direction="column"
        >
            <Navbar />
            <Grid
                gap={[0, 0, 7]}
                templateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(6, 1fr)",
                ]}
                maxW="7xl"
                w="full"
            >
                <GridItem
                    rounded="md"
                    display="flex"
                    flexDirection="column"
                    colSpan={2}
                >
                    <Sidebar />
                </GridItem>
                <GridItem display="flex" flexDirection="column" colSpan={4}>
                    {children}
                </GridItem>
            </Grid>
        </Flex>
    );
}

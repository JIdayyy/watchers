import { Center, Flex, Spinner } from "@chakra-ui/react";
import Navbar from "@components/Navbar";
import { login, logout } from "@redux/actions";
import { RootState } from "@redux/reducers";
import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMutateMeMutation } from "src/generated/graphql";

type Props = {
    children: ReactNode;
};

export default function MainLayout({ children }: Props): JSX.Element {
    const dispatch = useDispatch();
    const { user } = useSelector((state: RootState) => state.user);

    const [me, { loading }] = useMutateMeMutation({
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
        },
    });

    useEffect(() => {
        if (!user.id) {
            me();
        }
    }, []);

    if (loading)
        return (
            <Center w="100vw" h="100vh">
                <Spinner />
            </Center>
        );

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

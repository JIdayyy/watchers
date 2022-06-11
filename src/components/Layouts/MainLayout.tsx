import { Center, Flex, Spinner } from "@chakra-ui/react";
import Navbar from "@components/Navbar";
import { login, logout } from "@redux/actions";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMutateMeMutation } from "src/generated/graphql";

type Props = {
    children: ReactNode;
};

export default function MainLayout({ children }: Props): JSX.Element {
    const dispatch = useDispatch();

    const [me, { loading }] = useMutateMeMutation({
        onCompleted: (data) => {
            dispatch(
                login({
                    firstName: data.me.first_name,
                    lastName: data.me.last_name,
                    id: data.me.id,
                    email: data.me.email,
                }),
            );
        },
        onError: () => {
            dispatch(logout());
        },
    });

    useEffect(() => {
        me();
    }, []);

    if (loading)
        return (
            <Center w="100vw" h="100vh">
                <Spinner />
            </Center>
        );

    return (
        <Flex
            pt="110px"
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

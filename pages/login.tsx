import {
    Button,
    Flex,
    FormLabel,
    Input,
    Text,
    useColorMode,
    VStack,
} from "@chakra-ui/react";
import MainLayout from "@components/Layouts/MainLayout";
import { login } from "@redux/actions";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useMutateLoginMutation } from "src/generated/graphql";
import loginFormResolver from "src/Resolvers/LoginFormResolver";
import { yupResolver } from "@hookform/resolvers/yup";
import InputError from "@components/Form/InputError";

interface FormData {
    email: string;
    password: string;
}

export default function Login(): JSX.Element {
    const router = useRouter();
    const { colorMode } = useColorMode();
    const dispatch = useDispatch();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(loginFormResolver),
        criteriaMode: "all",
    });

    const [mutateLogin, { loading }] = useMutateLoginMutation();

    const onSubmit = (data: FormData) => {
        mutateLogin({
            variables: {
                data: {
                    email: data.email,
                    password: data.password,
                },
            },
            onCompleted: (data) => {
                dispatch(
                    login({
                        avatar: data.login.avatar,
                        nickName: data.login.nickname,
                        id: data.login.id,
                        email: data.login.email,
                        roles: data.login.role,
                    }),
                );
                router.push("/");
            },
        });
    };

    return (
        <Flex w="full" h="full" justifyContent="center" alignItems="center">
            <VStack
                spacing={2}
                p={5}
                rounded={5}
                shadow="base"
                w={["90%", "70%", "50%", "30%"]}
                h="50%"
                bg={colorMode === "light" ? "white" : "#171717"}
            >
                <Text fontSize="24px" fontWeight="bold">
                    Welcome back to Tech Watchers
                </Text>
                <Button isDisabled color="white" bg="black" w="full">
                    Continue with github
                </Button>
                <Button isDisabled color="white" bg="blue.300" w="full">
                    Continue with google
                </Button>

                <FormLabel w="full" textAlign="left" htmlFor="email">
                    Email
                </FormLabel>
                <Input {...register("email")} id="email" w="full" />
                <InputError name="email" errors={errors} />

                <FormLabel w="full" textAlign="left" htmlFor="password">
                    Password
                </FormLabel>
                <Input
                    {...register("password")}
                    type="password"
                    id="password"
                    w="full"
                />
                <InputError name="password" errors={errors} />

                <Button
                    isLoading={loading}
                    onClick={handleSubmit(onSubmit)}
                    color="white"
                    bg="blue"
                    w="full"
                >
                    Continue
                </Button>
            </VStack>
        </Flex>
    );
}

Login.Layout = MainLayout;

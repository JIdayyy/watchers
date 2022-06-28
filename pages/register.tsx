import {
    Button,
    Flex,
    FormLabel,
    Input,
    Text,
    useColorMode,
    VStack,
} from "@chakra-ui/react";
import InputError from "@components/Form/InputError";
import MainLayout from "@components/Layouts/MainLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "@redux/actions";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "src/generated/graphql";
import registerFormResolver from "src/Resolvers/RegisterFormResolver";

interface FormData {
    email: string;
    password: string;
    confirm_password: string;
    nickname: string;
}

export default function Register(): JSX.Element {
    const router = useRouter();
    const { colorMode } = useColorMode();
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<FormData>({
        criteriaMode: "all",
        resolver: yupResolver(registerFormResolver),
    });
    const [mutateRegister, { loading }] = useRegisterMutation();

    const onSubmit = (data: FormData) => {
        if (data.confirm_password !== data.password) {
            return;
        }
        mutateRegister({
            variables: {
                data: {
                    email: data.email,
                    password: data.password,
                    nickName: data.nickname,
                },
            },
            onCompleted: (data) => {
                dispatch(
                    login({
                        avatar: data.register.avatar,
                        nickName: data.register.nickname,
                        id: data.register.id,
                        email: data.register.email,
                        roles: data.register.role,
                    }),
                );
                router.push("/");
            },
        });
    };

    const handleProviderSignMethod = async (provider: string) => {
        setIsLoading(true);
        await signIn(provider, {
            redirect: true,
        });
        setIsLoading(false);
    };

    return (
        <Flex w="full" h="full" justifyContent="center" alignItems="center">
            <VStack
                spacing={2}
                p={5}
                rounded={5}
                shadow="base"
                w={["90%", "70%", "50%", "30%"]}
                bg={colorMode === "light" ? "white" : "#171717"}
            >
                <Text fontSize="24px" fontWeight="bold">
                    Welcome to Tech Watchers
                </Text>
                <Button
                    onClick={() => handleProviderSignMethod("github")}
                    color="white"
                    bg="black"
                    w="full"
                >
                    Continue with github
                </Button>
                <Button
                    onClick={() => handleProviderSignMethod("google")}
                    color="white"
                    bg="blue.300"
                    w="full"
                >
                    Continue with google
                </Button>

                <FormLabel w="full" textAlign="left" htmlFor="email">
                    Email
                </FormLabel>
                <Input {...register("email")} id="email" w="full" />
                <InputError errors={errors} name="email" />

                <FormLabel w="full" textAlign="left" htmlFor="nickname">
                    Pseudo
                </FormLabel>
                <Input {...register("nickname")} id="nickname" w="full" />
                <InputError errors={errors} name="nickname" />

                <FormLabel w="full" textAlign="left" htmlFor="password">
                    Password
                </FormLabel>
                <Input
                    {...register("password")}
                    type="password"
                    id="password"
                    w="full"
                />
                <InputError errors={errors} name="password" />

                <FormLabel w="full" textAlign="left" htmlFor="confirm_password">
                    Confirm password
                </FormLabel>
                <Input
                    {...register("confirm_password")}
                    type="password"
                    id="confirm_password"
                    w="full"
                />
                <InputError errors={errors} name="confirm_password" />

                <Button
                    isLoading={isLoading || loading}
                    onClick={handleSubmit(onSubmit)}
                    color="white"
                    bg="blue"
                    w="full"
                >
                    Continue
                </Button>
                <Flex>
                    <Text>Allready have an account ?</Text>
                    <Link href="/login">
                        <Text
                            cursor="pointer"
                            _hover={{ textDecoration: "underline" }}
                            ml={2}
                            fontWeight="bold"
                        >
                            Sign in
                        </Text>
                    </Link>
                </Flex>
            </VStack>
        </Flex>
    );
}

Register.Layout = MainLayout;

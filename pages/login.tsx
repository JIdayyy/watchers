import {
    Button,
    Flex,
    FormLabel,
    Input,
    Text,
    useColorMode,
    VStack,
} from "@chakra-ui/react";

import { signIn, useSession } from "next-auth/react";
import MainLayout from "@components/Layouts/MainLayout";
import React from "react";
import { useForm } from "react-hook-form";
import loginFormResolver from "src/Resolvers/LoginFormResolver";
import { yupResolver } from "@hookform/resolvers/yup";
import InputError from "@components/Form/InputError";
import Link from "next/link";

interface FormData {
    email: string;
    password: string;
}

export default function Login(): JSX.Element {
    const session = useSession();
    const { colorMode } = useColorMode();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(loginFormResolver),
        criteriaMode: "all",
    });

    const onSubmit = async (data: FormData) => {
        await signIn("credentials", {
            redirect: true,
            email: data.email,
            password: data.password,
        });
    };
    console.log(session.status);
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
                <Text as="h1" fontWeight="bold">
                    Welcome back to Tech Watchers
                </Text>
                <Button
                    onClick={() => signIn("github")}
                    color="white"
                    bg="black"
                    w="full"
                >
                    Continue with github
                </Button>
                <Button
                    onClick={() => signIn("google")}
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
                    isLoading={session.status === "loading"}
                    onClick={handleSubmit(onSubmit)}
                    color="white"
                    bg="blue"
                    w="full"
                >
                    Continue
                </Button>
                <Flex>
                    <Text>No account yet ?</Text>
                    <Link href="/register">
                        <Text
                            cursor="pointer"
                            _hover={{ textDecoration: "underline" }}
                            ml={2}
                            fontWeight="bold"
                        >
                            Sign up
                        </Text>
                    </Link>
                </Flex>
            </VStack>
        </Flex>
    );
}

Login.Layout = MainLayout;

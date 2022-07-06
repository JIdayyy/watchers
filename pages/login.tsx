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
import React, { useEffect, useState } from "react";
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
    const [isLoading, setIsLoading] = useState(false);
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(loginFormResolver),
        criteriaMode: "all",
    });

    const onSubmit = async (provider: string, data?: FormData) => {
        setIsLoading(true);
        if (provider === "credentials" && data) {
            await signIn("credentials", {
                redirect: true,
                email: data.email,
                password: data.password,
            });
        }
        setIsLoading(false);
    };

    const handleProviderSignMethod = async (provider: string) => {
        setIsLoading(true);
        await signIn(provider, {
            redirect: true,
        });
        setIsLoading(false);
    };

    useEffect(() => {
        if (session.status === "loading") {
            return setIsLoading(true);
        }
        return setIsLoading(false);
    }, [session.status]);

    return (
        <Flex w="full" h="full" justifyContent="center" alignItems="center">
            <VStack
                spacing={2}
                p={5}
                rounded={5}
                border={colorMode === "light" ? "1px solid #D6D6D6" : ""}
                w={["90%", "70%", "50%", "30%"]}
                bg={colorMode === "light" ? "white" : "#171717"}
            >
                <Text as="h1" fontWeight="bold">
                    Welcome back to Tech Watchers
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
                    isLoading={isLoading}
                    onClick={handleSubmit((data) =>
                        onSubmit("credentials", data),
                    )}
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

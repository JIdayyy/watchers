import { Button, Flex, FormLabel, Input, Text, VStack } from "@chakra-ui/react";
import MainLayout from "@components/Layouts/MainLayout";
import { login } from "@redux/actions";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "src/generated/graphql";

interface FormData {
    email: string;
    password: string;
    confirm_password: string;
    nickname: string;
}

export default function Register(): JSX.Element {
    const router = useRouter();
    const dispatch = useDispatch();
    const { handleSubmit, register } = useForm<FormData>();
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

    return (
        <Flex w="full" h="full" justifyContent="center" alignItems="center">
            <VStack
                spacing={2}
                p={5}
                rounded={5}
                shadow="base"
                w="30%"
                bg="white"
            >
                <Text fontSize="24px" fontWeight="bold">
                    Welcome to Tech Watchers
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
                <FormLabel w="full" textAlign="left" htmlFor="nickname">
                    Pseudo
                </FormLabel>
                <Input {...register("nickname")} id="nickname" w="full" />
                <FormLabel w="full" textAlign="left" htmlFor="password">
                    Password
                </FormLabel>
                <Input
                    {...register("password")}
                    type="password"
                    id="password"
                    w="full"
                />
                <FormLabel w="full" textAlign="left" htmlFor="confirm_password">
                    Confirm password
                </FormLabel>
                <Input
                    {...register("confirm_password")}
                    type="password"
                    id="confirm_password"
                    w="full"
                />
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

Register.Layout = MainLayout;

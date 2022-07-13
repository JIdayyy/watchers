import {
    Button,
    Flex,
    FormLabel,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
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
import { BsFillKeyFill } from "react-icons/bs";
import { useRouter } from "next/router";
import React, { useState } from "react";
import globalWebsiteConfig from "../website-config/global.json";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "src/generated/graphql";
import registerFormResolver from "src/Resolvers/RegisterFormResolver";
import { CheckIcon, EmailIcon } from "@chakra-ui/icons";
import Image from "next/image";

interface FormData {
    email: string;
    password: string;
    confirm_password: string;
    nickname: string;
}

export default function Register(): JSX.Element {
    const [isVisible, setIsVisible] = useState(false);
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
                spacing={3}
                p={10}
                rounded={5}
                border={colorMode == "light" ? "1px solid #D6D6D6" : ""}
                w={["90%", "70%", "50%", "30%"]}
                bg={colorMode === "light" ? "white" : "#171717"}
            >
                <Text fontSize="24px" fontWeight="bold">
                    Welcome to {globalWebsiteConfig["website-title"]}
                </Text>
                <Button
                    onClick={() => handleProviderSignMethod("github")}
                    color="white"
                    bg="black"
                    w="full"
                >
                    <Image
                        src="/icons/github-icon.svg"
                        width={20}
                        height={20}
                    />
                    <Text ml={2}>Continue with github</Text>
                </Button>
                <Button
                    onClick={() => handleProviderSignMethod("google")}
                    color="white"
                    bg="blue.300"
                    w="full"
                >
                    <Image src="/icons/google.png" width={20} height={20} />
                    <Text ml={2}>Continue with google</Text>
                </Button>

                <FormLabel w="full" textAlign="left" htmlFor="email">
                    Email
                </FormLabel>
                <InputGroup>
                    <Input {...register("email")} id="email" w="full" />
                    <InputRightElement children={<EmailIcon />} />
                    <InputError errors={errors} name="email" />
                </InputGroup>

                <FormLabel w="full" textAlign="left" htmlFor="nickname">
                    Pseudo
                </FormLabel>
                <InputGroup>
                    <Input {...register("nickname")} id="nickname" w="full" />
                    <InputRightElement children={<CheckIcon />} />

                    <InputError errors={errors} name="nickname" />
                </InputGroup>

                <FormLabel w="full" textAlign="left" htmlFor="password">
                    Password
                </FormLabel>

                <InputGroup>
                    <Input
                        type={isVisible ? "text" : "password"}
                        {...register("password")}
                        id="password"
                        w="full"
                    />
                    <InputRightElement
                        children={
                            <Button
                                bg="transparent"
                                _hover={{ bg: "transparent" }}
                                size="sm"
                                onClick={() => setIsVisible((c) => !c)}
                            >
                                <Icon as={BsFillKeyFill} />
                            </Button>
                        }
                    />
                    <InputError errors={errors} name="password" />
                </InputGroup>

                <FormLabel w="full" textAlign="left" htmlFor="confirm_password">
                    Confirm password
                </FormLabel>
                <InputGroup>
                    <InputRightElement
                        children={
                            <Button
                                bg="transparent"
                                _hover={{ bg: "transparent" }}
                                size="sm"
                                onClick={() => setIsVisible((c) => !c)}
                            >
                                <Icon as={BsFillKeyFill} />
                            </Button>
                        }
                    />
                    <Input
                        {...register("confirm_password")}
                        type={isVisible ? "text" : "password"}
                        id="confirm_password"
                        w="full"
                    />
                    <InputError errors={errors} name="confirm_password" />
                </InputGroup>

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

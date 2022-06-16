import {
    Flex,
    VStack,
    FormLabel,
    Input,
    Box,
    Button,
    Text,
    SkeletonCircle,
    SkeletonText,
} from "@chakra-ui/react";
import { RootState } from "@redux/reducers";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useGetUserDataQuery } from "src/generated/graphql";

export default function UserInformations(): JSX.Element {
    const { setValue, register } = useForm();
    const { user } = useSelector((state: RootState) => state.user);
    const { data } = useGetUserDataQuery({
        variables: {
            where: {
                id: user.id,
            },
        },
        onCompleted: (data) => {
            setValue("firstName", data.user.first_name);
            setValue("lastName", data.user.last_name);
            setValue("email", data.user.email);
            setValue("nickname", data.user.nickname);
        },
        skip: !user.id,
    });

    if (!data?.user) {
        return (
            <Box rounded="md" w="full" padding={10} shadow="base" bg="white">
                <SkeletonCircle size="10" />
                <SkeletonText height="40px" mt="2" noOfLines={2} spacing="2" />
                <SkeletonText height="40px" mt="2" noOfLines={2} spacing="2" />
                <SkeletonText height="40px" mt="2" noOfLines={2} spacing="2" />
                <SkeletonText height="40px" mt="2" noOfLines={2} spacing="2" />
                <SkeletonText height="40px" mt="2" noOfLines={2} spacing="2" />
                <SkeletonText height="40px" mt="2" noOfLines={2} spacing="2" />
            </Box>
        );
    }

    return (
        <Flex
            p={10}
            w="full"
            rounded="md"
            bg="white"
            shadow="base"
            flexDirection="column"
        >
            <Text mb={5} fontSize="24px" fontWeight="bold">
                User
            </Text>
            <VStack
                justifyContent="flex-start"
                alignItems="flex-start"
                w="full"
                spacing={2}
                as="form"
            >
                <FormLabel mt={1}>First Name</FormLabel>
                <Input {...register("firstName")} />
                <FormLabel mt={1}>Last Name</FormLabel>
                <Input {...register("lastName")} />
                <FormLabel mt={1}>Email</FormLabel>
                <Input {...register("email")} />
                <FormLabel mt={1}>Nickname</FormLabel>
                <Input {...register("nickname")} />
            </VStack>
            <FormLabel mt={4}>Profile Picture</FormLabel>
            <Flex w="full">
                <Box
                    width={30}
                    height={30}
                    position="relative"
                    overflow="hidden"
                    rounded="full"
                >
                    <Image layout="fill" src={data.user.avatar} />
                </Box>
                <Button size="sm" ml={4} variant="action">
                    Upload
                </Button>
            </Flex>
        </Flex>
    );
}

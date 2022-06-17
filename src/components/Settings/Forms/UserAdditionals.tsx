import {
    Flex,
    VStack,
    FormLabel,
    Input,
    Box,
    Text,
    SkeletonCircle,
    SkeletonText,
    Textarea,
} from "@chakra-ui/react";
import { RootState } from "@redux/reducers";
import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import { useGetUserAdditionalInformationsQuery } from "src/generated/graphql";

export default function UserAdditionalInformations(): JSX.Element {
    const { setValue, register } = useFormContext();
    const { user } = useSelector((state: RootState) => state.user);
    const { data } = useGetUserAdditionalInformationsQuery({
        variables: {
            where: {
                userId: user.id,
            },
        },
        onCompleted: (data) => {
            setValue("website", data.preference.website || "No website yet");
            setValue("location", data.preference.location || "No location yet");
            setValue("bio", data.preference.bio || "No bio yet");
        },
        skip: !user.id,
    });

    if (!data?.preference) {
        return (
            <Box rounded="md" w="full" padding={10} shadow="base" bg="white">
                <SkeletonCircle size="10" />
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
                More
            </Text>
            <VStack
                justifyContent="flex-start"
                alignItems="flex-start"
                w="full"
                spacing={2}
                as="form"
            >
                <FormLabel mt={1}>Website</FormLabel>
                <Input {...register("website")} />

                <FormLabel mt={1}>Location</FormLabel>
                <Input {...register("location")} />

                <FormLabel mt={1}>Bio</FormLabel>
                <Textarea {...register("bio")} />
            </VStack>
        </Flex>
    );
}

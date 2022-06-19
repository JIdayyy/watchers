import { VStack, FormLabel, Input, Button, Text } from "@chakra-ui/react";
import CustomFlex from "@definitions/chakra/theme/components/Box/CustomFlex";

import { useForm } from "react-hook-form";

export default function AccountsSettings(): JSX.Element {
    const { register } = useForm();

    return (
        <CustomFlex
            p={[5, 5, 10]}
            w="full"
            rounded="md"
            shadow="base"
            flexDirection="column"
            alignItems="flex-start"
        >
            <Text mb={5} fontSize="24px" fontWeight="bold">
                Change your password
            </Text>
            <VStack
                justifyContent="flex-start"
                alignItems="flex-start"
                w="full"
                spacing={2}
                as="form"
            >
                <FormLabel mt={1}>Current password</FormLabel>
                <Input type="password" {...register("current_password")} />
                <FormLabel mt={1}>New password</FormLabel>
                <Input type="password" {...register("new_password")} />
                <FormLabel mt={1}>Password confirmation</FormLabel>
                <Input type="password" {...register("confirm_password")} />
            </VStack>
            <Button mt={10} variant="action">
                Submit new password
            </Button>
        </CustomFlex>
    );
}

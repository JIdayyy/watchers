import { GridItem, useToast, VStack } from "@chakra-ui/react";

import SettingsLayout from "@components/Layouts/SettingsLayout";
import SaveSettingsButton from "@components/Settings/Forms/SaveSettingsButton";
import UserAdditionalInformations from "@components/Settings/Forms/UserAdditionals";
import UserInformations from "@components/Settings/Forms/UserInformations";
import { update } from "@redux/actions";
import { RootState } from "@redux/reducers";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
    useUpdateUserMutation,
    useUpdateUserPreferencesMutation,
} from "src/generated/graphql";

export default function Settings(): JSX.Element {
    const { user } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const [updatePreferences, { loading }] = useUpdateUserPreferencesMutation();
    const [updateUser] = useUpdateUserMutation();
    const toast = useToast();
    const methods = useForm();

    const onSubmit = (data: FieldValues) => {
        updateUser({
            variables: {
                data: {
                    first_name: {
                        set: data.firstName,
                    },
                    last_name: {
                        set: data.lastName,
                    },
                    email: {
                        set: data.email,
                    },
                    nickname: {
                        set: data.nickname,
                    },
                },
                where: {
                    id: user.id,
                },
            },
            onCompleted: (data) => {
                dispatch(update(data.updateUser));
            },
        });
        updatePreferences({
            variables: {
                data: {
                    bio: {
                        set: data.bio,
                    },
                    location: {
                        set: data.location,
                    },
                    website: {
                        set: data.website,
                    },
                },
                where: {
                    userId: user.id,
                },
            },
            onCompleted: () => {
                toast({
                    title: "Preferences updated",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                });
            },
        });
    };

    return (
        <GridItem display="flex" flexDirection="column" colSpan={4}>
            <FormProvider {...methods}>
                <VStack spacing={10}>
                    <UserInformations />

                    {/* <UserAdditionalInformations />

                    <SaveSettingsButton
                        isLoading={loading}
                        onSubmit={onSubmit}
                    /> */}
                </VStack>
            </FormProvider>
        </GridItem>
    );
}

Settings.Layout = SettingsLayout;

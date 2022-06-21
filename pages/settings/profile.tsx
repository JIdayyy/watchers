import { GridItem, VStack } from "@chakra-ui/react";
import SettingsLayout from "@components/Layouts/SettingsLayout";
import SaveSettingsButton from "@components/Settings/Forms/SaveSettingsButton";
import UserAdditionalInformations from "@components/Settings/Forms/UserAdditionals";
import UserInformations from "@components/Settings/Forms/UserInformations";
import { RootState } from "@redux/reducers";
import { useForm, FieldValues, FormProvider } from "react-hook-form";
import { useSelector } from "react-redux";
import { useUpdateUserPreferencesMutation } from "src/generated/graphql";

export default function Settings(): JSX.Element {
    const { user } = useSelector((state: RootState) => state.user);
    const [updatePreferences, { loading }] = useUpdateUserPreferencesMutation();
    const methods = useForm();
    const onSubmit = (data: FieldValues) => {
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
        });
    };

    return (
        <GridItem display="flex" flexDirection="column" colSpan={4}>
            <FormProvider {...methods}>
                <VStack spacing={10}>
                    <UserInformations />

                    <UserAdditionalInformations />

                    <SaveSettingsButton
                        isLoading={loading}
                        onSubmit={onSubmit}
                    />
                </VStack>
            </FormProvider>
        </GridItem>
    );
}

Settings.Layout = SettingsLayout;

import { Grid, GridItem, VStack } from "@chakra-ui/react";
import MainLayout from "@components/Layouts/MainLayout";
import SettingsLayout from "@components/Layouts/SettingsLayout";
import SaveSettingsButton from "@components/Settings/Forms/SaveSettingsButton";
import UserAdditionalInformations from "@components/Settings/Forms/UserAdditionals";
import UserInformations from "@components/Settings/Forms/UserInformations";
import Sidebar from "@components/Settings/Sidebar";

export default function Settings(): JSX.Element {
    return (
        <GridItem display="flex" flexDirection="column" colSpan={4}>
            <VStack spacing={10}>
                <UserInformations />

                <UserAdditionalInformations />

                <SaveSettingsButton />
            </VStack>
        </GridItem>
    );
}

Settings.Layout = SettingsLayout;

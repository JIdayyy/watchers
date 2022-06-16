import { GridItem } from "@chakra-ui/react";
import SettingsLayout from "@components/Layouts/SettingsLayout";
import AccountsSettings from "@components/Settings/Forms/AccountSettings";
import React from "react";

export default function Account(): JSX.Element {
    return (
        <GridItem display="flex" flexDirection="column" colSpan={4}>
            <AccountsSettings />
        </GridItem>
    );
}

Account.Layout = SettingsLayout;

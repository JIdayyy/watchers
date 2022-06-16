import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "@components/Navbar";
import Sidebar from "@components/Settings/Sidebar";
import { RootState } from "@redux/reducers";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { useSelector } from "react-redux";

type Props = {
    children: ReactNode;
};

export default function SettingsLayout({ children }: Props): JSX.Element {
    const { user } = useSelector((state: RootState) => state.user);
    const { push } = useRouter();

    if (!user.id) {
        if (typeof window !== "undefined") {
            if (typeof window !== undefined) push("/");
        }
    }

    return (
        <Flex
            pt="110px"
            w="100vw"
            h="100vh"
            justifyContent="flex-start"
            alignItems="center"
            direction="column"
        >
            <Navbar />
            <Grid
                gap={[0, 0, 7]}
                templateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(6, 1fr)",
                ]}
                maxW="7xl"
                w="full"
            >
                <GridItem
                    rounded="md"
                    display="flex"
                    flexDirection="column"
                    colSpan={2}
                >
                    <Sidebar />
                </GridItem>
                <GridItem display="flex" flexDirection="column" colSpan={4}>
                    {children}
                </GridItem>
            </Grid>
        </Flex>
    );
}

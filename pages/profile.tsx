import { Box, Flex } from "@chakra-ui/react";
import MainLayout from "@components/Layouts/MainLayout";
import { RootState } from "@redux/reducers";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Profile(): JSX.Element {
    const { user } = useSelector((state: RootState) => state.user);

    if (!user.id) {
        return (
            <MainLayout>
                <Box>
                    <h1>Profile</h1>
                    <p>You are not logged in</p>
                </Box>
            </MainLayout>
        );
    }

    return (
        <Flex
            position="relative"
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            transform="translateY(-45px)"
            w="full"
        >
            <Flex
                position="absolute"
                zIndex="base"
                h="150px"
                bg="black"
                w="full"
            />
            <Flex
                justifyContent="center"
                position="relative"
                bg="white"
                rounded="md"
                my={100}
                zIndex={999}
                shadow="base"
                w="full"
                maxW="5xl"
                h="400px"
            >
                <Box
                    rounded="full"
                    overflow="hidden"
                    border="10px solid black"
                    position="absolute"
                    top={0}
                    transform="translateY(-60px)"
                >
                    <Image
                        objectFit="cover"
                        src={user.avatar}
                        width={90}
                        height={90}
                    />
                </Box>
            </Flex>
        </Flex>
    );
}

Profile.Layout = MainLayout;

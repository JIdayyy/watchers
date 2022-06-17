import { Box, Button, Flex, Text } from "@chakra-ui/react";
import MainLayout from "@components/Layouts/MainLayout";
import { RootState } from "@redux/reducers";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Profile(): JSX.Element {
    const { user } = useSelector((state: RootState) => state.user);
    const { push } = useRouter();

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
                h="130px"
                bg="black"
                w="full"
            />
            <Flex
                justifyContent="center"
                alignItems="center"
                position="relative"
                bg="white"
                rounded="md"
                my={100}
                zIndex={999}
                shadow="base"
                w="full"
                maxW="5xl"
                h="300px"
                p={5}
                direction="column"
            >
                <Box position="absolute" top={0} transform="translateY(-80px)">
                    <Box
                        border="10px solid black"
                        width={150}
                        height={150}
                        overflow="hidden"
                        rounded="full"
                        position="relative"
                    >
                        <Image
                            objectFit="cover"
                            src={user.avatar}
                            layout="fill"
                        />
                    </Box>
                </Box>
                <Flex justifyContent="flex-end" alignItems="center" w="full">
                    <Button
                        onClick={() => push("/settings/profile")}
                        variant="action"
                    >
                        Edit Profile
                    </Button>
                </Flex>
                <Flex
                    w="full"
                    h="full"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text fontSize="30px" fontWeight="bold">
                        {user.nickName}
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
}

Profile.Layout = MainLayout;

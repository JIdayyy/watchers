import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
} from "@chakra-ui/react";
import { RootState } from "@redux/reducers";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { signOut } from "next-auth/react";

export default function UserMenu(): JSX.Element {
    const { user } = useSelector((state: RootState) => state.user);
    const { push } = useRouter();

    return (
        <Menu>
            <MenuButton
                display={["block"]}
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                _hover={{ bg: "gray.400", border: "4px solid black" }}
                _expanded={{ bg: "blue.400" }}
                _focus={{ boxShadow: "outline" }}
                position="relative"
                width="40px"
                height="40px"
                h="full"
                overflow="hidden"
                rounded="full"
            >
                <Image
                    src={
                        user.avatar ||
                        "data:image/jpeg;base64,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"
                    }
                    layout="fill"
                />
            </MenuButton>

            <MenuList
                minWidth={["100vw", "100vw", "30vw", "15vw"]}
                border="1px solid #D6D6D6"
            >
                <MenuItem
                    onClick={() => push("/profile")}
                    _hover={{ bg: "gray.200", textDecor: "underline" }}
                >
                    @{user.nickName}
                </MenuItem>
                <MenuDivider />
                <MenuItem
                    onClick={() => push("/new")}
                    _hover={{ bg: "gray.200", textDecor: "underline" }}
                >
                    New Watch
                </MenuItem>
                <MenuItem
                    onClick={() => push("/dashboard")}
                    _hover={{ bg: "gray.200", textDecor: "underline" }}
                >
                    Dashboard
                </MenuItem>
                <MenuItem
                    onClick={() => push("/settings")}
                    _hover={{ bg: "gray.200", textDecor: "underline" }}
                >
                    Settings
                </MenuItem>
                <MenuDivider />
                <MenuItem
                    onClick={() => {
                        signOut();
                    }}
                    _hover={{ bg: "gray.200", textDecor: "underline" }}
                >
                    Sign Out
                </MenuItem>
            </MenuList>
        </Menu>
    );
}

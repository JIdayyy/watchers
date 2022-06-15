import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
} from "@chakra-ui/react";
import { logout } from "@redux/actions";
import { RootState } from "@redux/reducers";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "src/generated/graphql";

export default function UserMenu(): JSX.Element {
    const { user } = useSelector((state: RootState) => state.user);
    const { push } = useRouter();
    const dispatch = useDispatch();
    const [mutateLogout] = useLogoutMutation({
        onCompleted: () => {
            dispatch(logout());
            push("/");
        },
    });

    return (
        <Menu>
            <MenuButton
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
                <Image src={user.avatar} layout="fill" />
            </MenuButton>

            <MenuList shadow="base">
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
                    onClick={() => push("/settings")}
                    _hover={{ bg: "gray.200", textDecor: "underline" }}
                >
                    Settings
                </MenuItem>
                <MenuDivider />
                <MenuItem
                    onClick={() => mutateLogout()}
                    _hover={{ bg: "gray.200", textDecor: "underline" }}
                >
                    Sign Out
                </MenuItem>
            </MenuList>
        </Menu>
    );
}

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Icon,
    useToast,
} from "@chakra-ui/react";
import { RootState } from "@redux/reducers";
import { useRouter } from "next/router";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useSelector } from "react-redux";
import {
    GetAllPostByInputDocument,
    SortOrder,
    useUpdatePostMutation,
} from "src/generated/graphql";

interface IProps {
    postId: string;
    refetch: () => void;
}

export default function DashboardPostCardMenu({
    postId,
    refetch,
}: IProps): JSX.Element {
    const { user } = useSelector((state: RootState) => state.user);
    const router = useRouter();
    const toast = useToast();

    const [updatePost] = useUpdatePostMutation({
        variables: {
            where: {
                id: postId,
            },
            data: {
                is_disabled: {
                    set: true,
                },
            },
        },

        refetchQueries: [
            {
                query: GetAllPostByInputDocument,

                notifyOnNetworkStatusChange: true,

                variables: {
                    where: {
                        author: {
                            is: {
                                id: {
                                    equals: user.id,
                                },
                            },
                        },
                        is_disabled: {
                            equals: false,
                        },
                    },
                    take: 10,
                    skip: 0,
                    orderBy: {
                        created_at: SortOrder.Desc,
                    },
                },
            },
        ],
        onCompleted: () => {
            refetch();
            toast({
                title: "Post deleted",
                description: "Your post has been deleted",
                status: "success",
            });
        },
    });

    const handleDelete = () => updatePost();

    return (
        <Menu>
            <MenuButton>
                <Button ml={4}>
                    <Icon as={BiDotsHorizontalRounded} size={10} />
                </Button>
            </MenuButton>
            <MenuList>
                <MenuItem
                    onClick={() =>
                        router.push(`/new?isEdit=true&postId=${postId}`)
                    }
                >
                    Edit
                </MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem onClick={handleDelete} bg="red">
                    Delete
                </MenuItem>
            </MenuList>
        </Menu>
    );
}

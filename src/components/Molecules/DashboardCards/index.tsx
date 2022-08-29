import { HStack } from "@chakra-ui/react";
import { RootState } from "@redux/reducers";
import { useSelector } from "react-redux";
import {
    useGetAllPostsQuery,
    SortOrder,
    useGetAllUserLikesQuery,
    useGetAllFollowersQuery,
} from "src/generated/graphql";
import Card from "./Card";

export default function DashboardCards(): JSX.Element {
    const { user } = useSelector((state: RootState) => state.user);
    const { data: followersData } = useGetAllFollowersQuery({
        variables: {
            where: {
                id: user.id,
            },
        },
    });

    const { data } = useGetAllPostsQuery({
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
            skip: 0,
            take: 5,
            orderBy: {
                created_at: SortOrder.Desc,
            },
        },
        fetchPolicy: "no-cache",
        skip: !user.id,
    });
    const { data: AllLikesData } = useGetAllUserLikesQuery({
        fetchPolicy: "cache-and-network",
        variables: {
            where: {
                id: user.id,
            },
        },
    });
    return (
        <HStack spacing={4} w="full" justifyContent="space-between">
            <Card number={data?.posts.length || 0} title="Total Posts" />
            <Card
                number={AllLikesData?.user.Post_likes.length || 0}
                title="Total Likes"
            />
            <Card
                number={followersData?.user.followersCount.count || 0}
                title="Total Followers"
            />
            <Card number={0} title="Total followed users" />
        </HStack>
    );
}

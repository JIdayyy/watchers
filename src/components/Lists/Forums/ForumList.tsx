import { Flex } from "@chakra-ui/react";
import ForumCategoriesTable from "@components/Tables/ForumCategoriesTable";
import { GetAllForumsQuery } from "src/generated/graphql";

interface IProps {
    forums: GetAllForumsQuery["forums"];
}

export default function ForumList({ forums }: IProps): JSX.Element {
    return (
        <Flex direction="column" maxW="7xl" w="full">
            {forums.map((forum) => (
                <ForumCategoriesTable forum={forum} />
            ))}
        </Flex>
    );
}

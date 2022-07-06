import {
    Divider,
    Flex,
    Spinner,
    Text,
    useOutsideClick,
} from "@chakra-ui/react";
import CustomFlex from "@definitions/chakra/theme/components/Box/CustomFlex";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useGetAllTagsQuery } from "src/generated/graphql";
import { mode } from "@chakra-ui/theme-tools";

interface IProps {
    isFocus: boolean;
    setIsFocus: Dispatch<SetStateAction<boolean>>;
    handleSetTags: (e: string) => void;
    inputRef: React.RefObject<HTMLInputElement>;
}

export default function TagsList({
    isFocus,
    setIsFocus,
    handleSetTags,
    inputRef,
}: IProps): JSX.Element {
    const { data, loading } = useGetAllTagsQuery();
    const [isHover, setisHover] = useState(false);

    useOutsideClick({
        ref: inputRef,
        handler: () => {
            if (!isHover) {
                setIsFocus(false);
            }
        },
    });

    if (loading) {
        return (
            <CustomFlex
                justifyContent="center"
                alignItems="center"
                bottom={0}
                transform="translateY(100%)"
                shadow="xl"
                maxH="200px"
                overflowY="auto"
                className="scrollbarList"
                zIndex={999}
                position="absolute"
                w="full"
            >
                <Spinner />
            </CustomFlex>
        );
    }

    const handleSelectTag = async (tagName: string) => {
        handleSetTags(tagName);
        setIsFocus(false);
    };

    return (
        <>
            {isFocus && (
                <CustomFlex
                    onMouseEnter={() => setisHover(true)}
                    onMouseLeave={() => setisHover(false)}
                    bottom={0}
                    transform="translateY(100%)"
                    shadow="lg"
                    maxH="400px"
                    overflowY="auto"
                    className="scrollbarList"
                    zIndex={999}
                    position="absolute"
                    w="full"
                >
                    <Text p={5} as="h1">
                        Select tags
                    </Text>
                    <Divider />
                    <Flex p={5} direction="column">
                        {data?.tags.map((tag) => (
                            <Flex
                                onClick={async () => {
                                    await handleSelectTag(tag.name);
                                }}
                                p={2}
                                rounded="md"
                                cursor="pointer"
                                _hover={{
                                    backgroundColor: mode("#FFFFFF", "#000000"),
                                    color: mode("#000000", "#FFFFFF"),
                                }}
                            >
                                #{tag.name}
                            </Flex>
                        ))}
                    </Flex>
                </CustomFlex>
            )}
        </>
    );
}

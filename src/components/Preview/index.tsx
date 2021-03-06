import { Flex, Text, useColorMode } from "@chakra-ui/react";
import { RootState } from "@redux/reducers";
import Image from "next/image";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import hljs from "highlight.js";
import CustomFlex from "@definitions/chakra/theme/components/Box/CustomFlex";

interface IProps {
    image: File | undefined;
    title: string;
    tags: string[];
    content: string;
}

export default function Preview({
    image,
    title,
    tags,
    content,
}: IProps): JSX.Element {
    const { user } = useSelector((state: RootState) => state.user);
    const { colorMode } = useColorMode();

    if (!user.id) return <></>;

    useEffect(() => {
        hljs.highlightAll();
        const code = document.querySelectorAll("pre");
        if (!code) {
            return;
        }
        code.forEach((el) => {
            el.innerHTML = `<code class="hljs">${hljs
                .highlightAuto(el.innerHTML, ["javascript"])
                .value.replaceAll("&amp;gt;", ">")
                .replaceAll("&amp;lt;", "<")}</code>`;
        });
    }, []);

    return (
        <CustomFlex
            h="full"
            border={colorMode == "light" ? "1px solid #D6D6D6" : ""}
            rounded="md"
            overflow="hidden"
            direction="column"
        >
            <Flex position="relative" w="full" h="250px">
                {image && (
                    <Image
                        objectFit="cover"
                        priority
                        src={URL.createObjectURL(image as File)}
                        layout="fill"
                    />
                )}
            </Flex>
            <Flex
                direction="column"
                p={5}
                w="full"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <Text as="p">{user.nickName}</Text>
                <Text my={4} as="h1">
                    {title}
                </Text>
                <Flex my={4}>
                    {tags.map((tag) => (
                        <Text key={tag} mr={1} as="p">
                            #{tag}
                        </Text>
                    ))}
                </Flex>

                <Text
                    w="full"
                    dangerouslySetInnerHTML={{
                        __html: content,
                    }}
                />
            </Flex>
        </CustomFlex>
    );
}

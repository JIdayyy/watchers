/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Button,
    Flex,
    Icon,
    Input,
    Text,
    useColorMode,
    useToast,
} from "@chakra-ui/react";
import NewWatchLayout from "@components/Layouts/NewWatch";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import globalWebsiteConfig from "../website-config/global.json";
import { FieldValues, useForm } from "react-hook-form";
import { useCreatePostMutation } from "src/generated/graphql";
import { useSelector } from "react-redux";
import { RootState } from "@redux/reducers";
import { imageService } from "@services/api/fetcher";
import axiosInstance from "@services/api/axiosInstance";
import { CloseIcon } from "@chakra-ui/icons";
import CustomFlex from "@definitions/chakra/theme/components/Box/CustomFlex";
import dynamic from "next/dynamic";

const initialValue = "<p> <b>Start to writte your watch here ...</b></p>";

const RichText = dynamic(() => import("@components/RichText"));
const Preview = dynamic(() => import("@components/Preview"));
const CategoriesModal = dynamic(
    () => import("@components/Modals/Categories.modal"),
);
const TagsList = dynamic(() => import("@components/Tags/TagsList"));

export default function NewWatch(): JSX.Element {
    const toast = useToast();
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocus, setIsFocus] = useState(false);
    const { colorMode } = useColorMode();
    const [isPreview, setIsPreview] = useState(false);
    const fileInpuRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const { user } = useSelector((state: RootState) => state.user);
    const [tags, setTags] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState("");
    const [value, onChange] = useState(initialValue);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const { handleSubmit, register, getValues } = useForm();
    const [image, setImage] = useState<File | undefined>();
    const [createPost, { loading }] = useCreatePostMutation();
    const [isUploading, setIsUploading] = useState(false);
    const toolbarOptions = [
        "bold",
        "semi-bold",
        "semibold",
        "semiBold",
        "italic",
        "underline",
        "strike",
    ];

    useEffect(() => {
        if (!user.id) {
            router.push("/");
        }
    }, []);

    const handleSetTags = (e: string) => {
        if (tags.length < 4 && e.length > 0) {
            setTags([
                ...tags.filter(
                    (tag) => tag !== e.split(" ").join("").toLowerCase(),
                ),
                e.split(" ").join("").toLowerCase(),
            ]);
            setTagInput("");
            setIsFocus(false);
        }
    };

    const handleRemoveTag = (name: string) => {
        setTags(tags.filter((tag) => tag !== name));
    };

    const handleClickOnUpload = () => {
        if (fileInpuRef.current) fileInpuRef.current.click();
    };

    const uploadCoverPicture = async (oneFile: File, postId: string) => {
        setIsUploading(true);
        const formData = new FormData();

        formData.append(
            "operations",
            JSON.stringify({
                query: "mutation upload($file: Upload!){\n uploadCoverPicture(file: $file){\n  cover_picture\n }\n}\n",
            }),
        );
        formData.append("map", JSON.stringify({ "0": ["variables.file"] }));
        formData.append("0", oneFile);

        const response = await imageService.upload({
            formData,
            postId,
            size: oneFile.size,
        });
        setIsUploading(false);
        return response;
    };

    const handleImageUpload = (image: File): Promise<string> =>
        new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append(
                "operations",
                JSON.stringify({
                    query: "mutation upload($file: Upload!){\n uploadPostPicture(file: $file){\n  url\n }\n}\n",
                }),
            );
            formData.append("map", JSON.stringify({ "0": ["variables.file"] }));
            formData.append("0", image);

            axiosInstance
                .post(``, formData)
                .then((response) => response.data)
                .then((result) => {
                    resolve(result.data.url);
                })
                .catch(() => reject(new Error("Upload failed")));
        });

    const onSubmit = (data: FieldValues) => {
        if (!selectedCategory) {
            return toast({
                title: "Please select a category",
                status: "error",
                duration: 4000,
            });
        }
        createPost({
            variables: {
                data: {
                    author: {
                        connect: {
                            id: user?.id,
                        },
                    },
                    Category: {
                        connect: {
                            id: selectedCategory,
                        },
                    },
                    slug: data.title
                        .toLowerCase()
                        .replace(/[^a-z0-9 -]/g, "")
                        .replace(/\s+/g, "-")
                        .replace(/-+/g, "-"),
                    content: value,
                    title: data.title,
                    Tags: {
                        connectOrCreate: tags.map((tag) => ({
                            where: {
                                name: tag,
                            },
                            create: {
                                name: tag,
                            },
                        })),
                    },
                },
            },
            onCompleted: async (data) => {
                if (image) {
                    await uploadCoverPicture(image, data.createPost.id).then(
                        (res) => {
                            if (res) {
                                router.push(`/${data.createPost.slug}`);
                            }
                        },
                    );
                }
            },
        });
    };

    return (
        <Flex
            direction="column"
            justifyContent="center"
            pb={10}
            minH="100vh"
            w="7xl"
            maxW="7xl"
            px={[0, 0, 2, 2, 0]}
        >
            <Flex py={3} mb={10} w="full" justifyContent="space-between">
                <Button
                    bg="black"
                    px={5}
                    rounded={5}
                    justifyContent="center"
                    alignItems="center"
                    w="200px"
                    onClick={() => router.push("/")}
                >
                    <Text mr={2} color="white" fontWeight="bold">
                        {globalWebsiteConfig["website-title"]}
                    </Text>
                    <Image src="/icons/watchers.png" width={25} height={25} />
                </Button>
                <Button>X</Button>
            </Flex>
            <Flex my={1} justifyContent="space-between" w="full">
                <Text fontSize="24px" fontWeight="bold">
                    Create Post
                </Text>
                <Button
                    bg="blue.400"
                    color="white"
                    onClick={() => setIsPreview((c) => !c)}
                >
                    {isPreview ? "Edit" : "Preview"}
                </Button>
            </Flex>
            {!isPreview ? (
                <>
                    <CustomFlex
                        w="full"
                        display="flex"
                        h="full"
                        rounded="md"
                        border="2px solid #D4D4D4"
                        direction="column"
                    >
                        <Flex
                            direction="column"
                            justifyContent="space-between"
                            p={5}
                            h={["500px", "500px"]}
                            w="full"
                        >
                            <Flex w="full" justifyContent="space-between">
                                <Flex>
                                    <Button
                                        mr={4}
                                        onClick={handleClickOnUpload}
                                    >
                                        Add cover picture
                                    </Button>

                                    {image && (
                                        <Image
                                            objectFit="cover"
                                            priority
                                            src={URL.createObjectURL(
                                                image as File,
                                            )}
                                            width={160}
                                            height={90}
                                        />
                                    )}
                                </Flex>
                                <Input
                                    onChange={(
                                        e: ChangeEvent<HTMLInputElement>,
                                    ) => setImage(e.target.files?.[0])}
                                    ref={fileInpuRef}
                                    display="none"
                                    type="file"
                                />
                                <CategoriesModal
                                    category={selectedCategory}
                                    setSelectedCategory={setSelectedCategory}
                                />
                            </Flex>
                            <Input
                                {...register("title")}
                                fontWeight="bold"
                                fontSize={["18px", "24px"]}
                                border="0px"
                                _placeholder={{
                                    fontWeight: "bold",
                                    fontSize: "24px",
                                }}
                                _focus={{ border: "0px" }}
                                placeholder="Add a title here ..."
                            />
                            <Flex position="relative" flexWrap="wrap" w="full">
                                {tags.map((tag) => (
                                    <Flex
                                        justifyContent="center"
                                        alignItems="center"
                                        rounded="md"
                                        px={2}
                                        py={[0, 1]}
                                        my={1}
                                        mx={[1, 2]}
                                    >
                                        <Text
                                            whiteSpace="nowrap"
                                            fontWeight="bold"
                                            as="p"
                                        >
                                            #{tag}
                                        </Text>
                                        <Button
                                            size="sm"
                                            bg="transparent"
                                            _focus={{ border: "0px" }}
                                            onClick={() => handleRemoveTag(tag)}
                                        >
                                            <Icon
                                                color={
                                                    colorMode === "light"
                                                        ? "black"
                                                        : "white"
                                                }
                                                as={CloseIcon}
                                                size={5}
                                            />
                                        </Button>
                                    </Flex>
                                ))}
                                <Input
                                    ref={inputRef}
                                    onBlur={(e: any) => {
                                        if (e.target.value) {
                                            handleSetTags(e.target.value);
                                        }
                                    }}
                                    value={tagInput}
                                    onKeyDown={(e: any) => {
                                        if (e.key === "Enter") {
                                            handleSetTags(e.target.value);
                                        }
                                    }}
                                    onChange={(
                                        e: ChangeEvent<HTMLInputElement>,
                                    ) => setTagInput(e.target.value)}
                                    fontWeight="bold"
                                    fontSize={["18px", "24px"]}
                                    border="0px"
                                    onFocus={() => setIsFocus(true)}
                                    _placeholder={{
                                        fontWeight: "bold",
                                        fontSize: "24px",
                                    }}
                                    _focus={{ border: "0px" }}
                                    placeholder="Add up to 4 tags here ..."
                                />
                                <TagsList
                                    inputRef={inputRef}
                                    handleSetTags={handleSetTags}
                                    isFocus={isFocus}
                                    setIsFocus={setIsFocus}
                                />
                            </Flex>
                        </Flex>

                        <RichText
                            modules={{
                                history: {
                                    delay: 2000,
                                    maxStack: 500,
                                    userOnly: true,
                                },
                                toolbar: toolbarOptions,
                            }}
                            onImageUpload={(image) => handleImageUpload(image)}
                            styles={{
                                root: {
                                    backgroundColor:
                                        colorMode === "light"
                                            ? "white"
                                            : "#171717",
                                    height: "100%",
                                    color:
                                        colorMode === "light"
                                            ? "black"
                                            : "white",
                                    border: "0px",
                                },
                                toolbar: {
                                    color: "black",
                                    background: "#FAF9F9",
                                    border: "0px",
                                },

                                toolbarInner: { color: "black" },
                                toolbarGroup: { color: "black" },
                                toolbarControl: { color: "black" },
                            }}
                            value={value}
                            onChange={onChange}
                        />
                    </CustomFlex>
                    <Flex
                        my={1}
                        justifyContent="flex-start"
                        alignItems="flex-start"
                    >
                        <Button
                            isLoading={loading || isUploading}
                            onClick={handleSubmit(onSubmit)}
                            bg="blue"
                            color="white"
                            mr={2}
                        >
                            PUBLISH
                        </Button>
                        <Button bg="transparent">Save as draft</Button>
                    </Flex>
                </>
            ) : (
                <Preview
                    title={getValues("title")}
                    tags={tags}
                    content={value}
                    image={image}
                />
            )}
        </Flex>
    );
}

NewWatch.Layout = NewWatchLayout;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Button, Input, Icon, Text } from "@chakra-ui/react";
import CategoriesModal from "@components/Modals/Categories.modal";
import RichText from "@components/RichText";
import { RootState } from "@redux/reducers";
import axiosInstance from "@services/api/axiosInstance";
import { imageService } from "@services/api/fetcher";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ChangeEvent, useRef, useState, useEffect } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { GrClose } from "react-icons/gr";
import { useSelector } from "react-redux";
import { useCreatePostMutation } from "src/generated/graphql";

const initialValue = "<p> <b>Start to writte your watch here ...</b></p>";

export default function Editor(): JSX.Element {
    const fileInpuRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const { user } = useSelector((state: RootState) => state.user);
    const [tags, setTags] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState("");
    const [value, onChange] = useState(initialValue);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const { handleSubmit, register } = useForm();
    const [image, setImage] = useState<File | undefined>();
    const [createPost, { loading }] = useCreatePostMutation();
    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
        if (!user.id) {
            router.push("/");
        }
    }, []);

    const handleSetTags = (e: string) => {
        if (tags.length < 4) {
            setTags([...tags, e.split(" ").join("").toLowerCase()]);
            setTagInput("");
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
                    slug: data.title.toLowerCase().replace(/\s/g, "-"),
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
        <>
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
                        Tech Watchers
                    </Text>
                    <Image src="/icons/watchers.png" width={25} height={25} />
                </Button>
                <Button>X</Button>
            </Flex>
            <Text fontSize="24px" fontWeight="bold">
                Create Watch
            </Text>
            <Flex
                w="full"
                h="full"
                rounded="md"
                border="2px solid #D4D4D4"
                direction="column"
            >
                <Flex
                    direction="column"
                    justifyContent="space-between"
                    p={5}
                    h="40%"
                    w="full"
                >
                    <Flex w="full" justifyContent="space-between">
                        <Button onClick={handleClickOnUpload}>
                            Add cover picture
                        </Button>
                        <Input
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setImage(e.target.files?.[0])
                            }
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
                        color="black"
                        fontWeight="bold"
                        fontSize="24px"
                        border="0px"
                        _placeholder={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: "24px",
                        }}
                        _focus={{ border: "0px" }}
                        placeholder="Add a title here ..."
                    />
                    <Flex w="full">
                        {tags.map((tag) => (
                            <Flex
                                justifyContent="center"
                                alignItems="center"
                                bg="gray.200"
                                rounded="md"
                                px={2}
                                py={1}
                                mx={2}
                            >
                                <Text
                                    whiteSpace="nowrap"
                                    fontWeight="bold"
                                    as="p"
                                >
                                    #{tag}
                                </Text>
                                <Button
                                    _focus={{ border: "0px" }}
                                    backgroundColor="transparent"
                                    onClick={() => handleRemoveTag(tag)}
                                >
                                    <Icon as={GrClose} size={5} />
                                </Button>
                            </Flex>
                        ))}
                        <Input
                            value={tagInput}
                            onKeyDown={(e: any) => {
                                if (e.key === "Enter") {
                                    handleSetTags(e.target.value);
                                }
                            }}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setTagInput(e.target.value)
                            }
                            color="black"
                            fontWeight="bold"
                            fontSize="24px"
                            border="0px"
                            _placeholder={{
                                color: "black",
                                fontWeight: "bold",
                                fontSize: "24px",
                            }}
                            _focus={{ border: "0px" }}
                            placeholder="Add up to 4 tags here ..."
                        />
                    </Flex>
                </Flex>
                <RichText
                    onImageUpload={(image) => handleImageUpload(image)}
                    styles={{
                        root: { color: "black", border: "0px" },
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
            </Flex>
            <Flex my={1} justifyContent="flex-start" alignItems="flex-start">
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
    );
}

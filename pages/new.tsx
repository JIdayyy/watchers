/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import NewWatchLayout from "@components/Layouts/NewWatch";
import React, { ChangeEvent, useRef, useState } from "react";
import RichText from "@components/RichText";
import Image from "next/image";
import { useRouter } from "next/router";
import CategoriesModal from "@components/Modals/Categories.modal";
import { FieldValues, useForm } from "react-hook-form";
import { useCreatePostMutation } from "src/generated/graphql";
import { useSelector } from "react-redux";
import { RootState } from "@redux/reducers";
import { imageService } from "@services/api/fetcher";

const initialValue = "<p> <b>Start to writte your watch here ...</b></p>";

export default function NewWatch(): JSX.Element {
    const fileInpuRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const { user } = useSelector((state: RootState) => state.user);
    const [tags, setTags] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState("");
    const [value, onChange] = useState(initialValue);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const { handleSubmit, register } = useForm();
    const [image, setImage] = useState<File | undefined>();
    const [progress, setProgress] = useState<number>(0);
    const [createPost, { loading }] = useCreatePostMutation();
    const [isUploading, setIsUploading] = useState(false);

    console.log(progress);

    const handleSetTags = (e: string) => {
        console.log(e);
        if (tags.length < 4) {
            setTags([...tags, e]);
            setTagInput("");
        }
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
            setProgress,
            size: oneFile.size,
        });
        setIsUploading(false);
        return response;
    };

    const handleImageUpload = (file: File): Promise<string> =>
        new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("image", file);

            fetch("https://api.imgbb.com/1/upload?key=api_key", {
                method: "POST",
                body: formData,
            })
                .then((response) => response.json())
                .then((result) => resolve(result.data.url))
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
        <Flex
            direction="column"
            justifyContent="center"
            pb={10}
            w="7xl"
            maxW="7xl"
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
                            <Flex bg="gray.200" rounded="md" p={2} mx={2}>
                                {tag}
                            </Flex>
                        ))}
                        <Input
                            value={tagInput}
                            onKeyDown={(e: any) => {
                                if (e.key === "Enter") {
                                    handleSetTags(e.target.value);
                                }
                            }}
                            onChange={(e) => setTagInput(e.target.value)}
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
                    onImageUpload={handleImageUpload}
                    styles={{
                        // minHeight: "60%",
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
        </Flex>
    );
}

NewWatch.Layout = NewWatchLayout;

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axiosInstance from "./axiosInstance";

interface UploadProfilePicture {
    postId: string;
    size: number;
    formData: FormData;
    setProgress: (progress: number) => void;
}

export const imageService = {
    upload: async ({
        postId,
        size,
        formData,
        setProgress,
    }: UploadProfilePicture) =>
        (
            await axiosInstance.post(
                `?postId=${postId}&size=${size}`,
                formData,
                {
                    onUploadProgress: (progressEvent) => {
                        const { loaded, total } = progressEvent;
                        setProgress((loaded / total) * 100);
                    },
                },
            )
        ).data.data,
};

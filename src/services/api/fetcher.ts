/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axiosInstance from "./axiosInstance";

interface UploadProfilePicture {
    postId: string;
    size: number;
    formData: FormData;
}

export const imageService = {
    upload: async ({ postId, size, formData }: UploadProfilePicture) =>
        (await axiosInstance.post(`?postId=${postId}&size=${size}`, formData))
            .data.data,
};

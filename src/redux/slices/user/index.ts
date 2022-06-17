import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Role } from "src/generated/graphql";

type User = {
    id: string;
    nickName: string;
    email: string;
    roles: Role[];
    avatar: string;
};

interface IUser {
    user: User;
}

const initialState: IUser = {
    user: {
        email: "",
        id: "",
        nickName: "",
        roles: [],
        avatar: "",
    },
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state: IUser, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        update: (state: IUser, action: PayloadAction<Partial<User>>) => {
            state.user = { ...state.user, ...action.payload };
        },
        logout: (state: IUser) => {
            state.user = initialState.user;
        },
    },
});

export const { login, logout, update } = userSlice.actions;

export default userSlice.reducer;

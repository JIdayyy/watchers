import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Role } from "src/generated/graphql";

type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    roles: Role[];
};

interface IUser {
    user: User | null;
}

const initialState: IUser = {
    user: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state: IUser, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        logout: (state: IUser) => {
            state.user = null;
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

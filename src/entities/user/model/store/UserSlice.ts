import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { REQUEST_STATUS } from "@/shared/api/types";

import { IUser } from "../../lib/types";
import { fetchLogin } from "./thunk/fetchLogin";
import { fetchLogout } from "./thunk/fetchLogout";
import { fetchUpdateUser } from "./thunk/fetchUpdateUser";
import { fetchUser } from "./thunk/fetchUser";

interface IInitState {
    status: REQUEST_STATUS;
    isAuth: boolean;
    data: IUser;
}

const initialState: IInitState = {
    status: REQUEST_STATUS.SUCCESS,
    isAuth: false,
    data: {
        name: "",
        surname: "",
        patronymic: "",
        age: 0,
        phone: ""
    }
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuth: (state: IInitState, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        }
    },
    extraReducers: (builder) => {
        // fetchUser
        builder.addCase(fetchUser.pending, (state: IInitState) => {
            state.status = REQUEST_STATUS.PENDING;
        });
        builder.addCase(fetchUser.fulfilled, (state: IInitState, { payload }) => {
            if (!payload) {
                state.status = REQUEST_STATUS.SUCCESS;

                return;
            }

            const { data, status } = payload;

            state.data = data;
            state.status = status;
        });
        builder.addCase(fetchUser.rejected, (state: IInitState) => {
            state.status = REQUEST_STATUS.FAILED;
        });

        // fetchUpdateUser
        builder.addCase(fetchUpdateUser.fulfilled, (state: IInitState, { payload }) => {
            const { data, status } = payload;

            state.data = { ...data };
            state.status = status;
        });

        // fetchLogin
        builder.addCase(fetchLogin.fulfilled, (state: IInitState) => {
            state.isAuth = true;
        });

        // fetchLogout
        builder.addCase(fetchLogout.fulfilled, (state: IInitState) => {
            state.isAuth = false;
            state.data = initialState.data;
        });
    }
});

export const { setAuth } = userSlice.actions;

export const userReducer = userSlice.reducer;

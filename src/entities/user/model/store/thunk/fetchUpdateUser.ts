import { createAsyncThunk } from "@reduxjs/toolkit";

import { addNotificationMessage } from "@/entities/notification";
import { REQUEST_STATUS, ThunkOptions } from "@/shared/api/types";
import { errorHandle } from "@/shared/lib/helpers";

import { IUser } from "../../../lib/types";
import { updateUser } from "../../api/api";

interface IUserUpdateResp {
    status: REQUEST_STATUS;
    data: IUser;
}

export const fetchUpdateUser = createAsyncThunk<IUserUpdateResp, IUser, ThunkOptions>(
    "userSlice/fetchUpdateUser",
    async (payload, { dispatch, rejectWithValue }) => {
        try {
            const { status, data, message } = await updateUser(payload);

            if (message) {
                dispatch(addNotificationMessage({ message, status: "success" }));
            }

            return { status, data };
        } catch (err: any) {
            return errorHandle({ err, rejectWithValue, dispatch });
        }
    }
);

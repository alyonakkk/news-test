import { createAsyncThunk } from "@reduxjs/toolkit";

import { REQUEST_STATUS, ThunkOptions } from "@/shared/api/types";
import { errorHandle } from "@/shared/lib/helpers";

import { IUser } from "../../../lib/types";
import { getUser } from "../../api/api";

interface IUserGetResp {
    status: REQUEST_STATUS;
    data: IUser;
}

export const fetchUser = createAsyncThunk<IUserGetResp | null, undefined, ThunkOptions>(
    "userSlice/fetchUser",
    async (payload, { dispatch, getState, rejectWithValue }) => {
        try {
            const { user } = getState();

            if (!!user.data.name || !user.isAuth) return null;

            const { status, data } = await getUser();

            return { status, data };
        } catch (err: any) {
            return errorHandle({ err, rejectWithValue, dispatch });
        }
    }
);

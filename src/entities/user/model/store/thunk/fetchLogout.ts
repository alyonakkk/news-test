import { createAsyncThunk } from "@reduxjs/toolkit";

import { REQUEST_STATUS, ThunkOptions } from "@/shared/api/types";
import { errorHandle } from "@/shared/lib/helpers";

import { logout } from "../../api/api";

interface ILoginResp {
    status: REQUEST_STATUS;
    data: null;
}

export const fetchLogout = createAsyncThunk<ILoginResp, undefined, ThunkOptions>(
    "userSlice/fetchLogout",
    async (payload, { dispatch, rejectWithValue }) => {
        try {
            const { status, data } = await logout();

            return { status, data };
        } catch (err: any) {
            return errorHandle({ err, rejectWithValue, dispatch });
        }
    }
);

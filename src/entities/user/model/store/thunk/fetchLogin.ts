import { createAsyncThunk } from "@reduxjs/toolkit";

import { REQUEST_STATUS, ThunkOptions } from "@/shared/api/types";
import { errorHandle } from "@/shared/lib/helpers";

import { ILogin } from "../../../lib/types";
import { login } from "../../api/api";

interface ILoginResp {
    status: REQUEST_STATUS;
    data: null;
}

interface ILoginPayload {
    loginData: ILogin;
    cb: () => void;
}

export const fetchLogin = createAsyncThunk<ILoginResp, ILoginPayload, ThunkOptions>(
    "userSlice/fetchLogin",
    async (payload, { dispatch, rejectWithValue }) => {
        try {
            const { loginData, cb } = payload;
            const { status, data } = await login(loginData);

            cb();

            return { status, data };
        } catch (err: any) {
            return errorHandle({ err, rejectWithValue, dispatch });
        }
    }
);

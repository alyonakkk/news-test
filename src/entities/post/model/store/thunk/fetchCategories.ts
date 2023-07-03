import { createAsyncThunk } from "@reduxjs/toolkit";

import { REQUEST_STATUS, ThunkOptions } from "@/shared/api/types";
import { errorHandle } from "@/shared/lib/helpers";

import { IPostCategory } from "../../../lib/types";
import { getCategories } from "../../api/api";

interface ICategoryGetResp {
    status: REQUEST_STATUS;
    data: IPostCategory[];
}

export const fetchCategories = createAsyncThunk<ICategoryGetResp | null, undefined, ThunkOptions>(
    "postsSlice/fetchCategories",
    async (payload, { dispatch, getState, rejectWithValue }) => {
        try {
            const {
                posts: { filterList }
            } = getState();

            if (!!filterList.data.length) return null;

            const { status, data } = await getCategories();

            return { status, data };
        } catch (err: any) {
            return errorHandle({ err, rejectWithValue, dispatch });
        }
    }
);

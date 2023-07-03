import { createAsyncThunk } from "@reduxjs/toolkit";

import { REQUEST_STATUS, ThunkOptions } from "@/shared/api/types";
import { errorHandle } from "@/shared/lib/helpers";

import { IPostFilter } from "../../../lib/types";
import { getFilters } from "../../api/api";

interface IFiltersGetResp {
    status: REQUEST_STATUS;
    data: IPostFilter[];
}

export const fetchFilters = createAsyncThunk<IFiltersGetResp | null, undefined, ThunkOptions>(
    "postsSlice/fetchFilters",
    async (payload, { dispatch, getState, rejectWithValue }) => {
        try {
            const {
                posts: { filterList }
            } = getState();

            if (!!filterList.data.length) return null;

            const { status, data } = await getFilters();

            return { status, data };
        } catch (err: any) {
            return errorHandle({ err, rejectWithValue, dispatch });
        }
    }
);

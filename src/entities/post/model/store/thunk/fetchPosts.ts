import { createAsyncThunk } from "@reduxjs/toolkit";

import { REQUEST_STATUS, ThunkOptions } from "@/shared/api/types";
import { errorHandle } from "@/shared/lib/helpers";

import { IPost } from "../../../lib/types";
import { getPosts } from "../../api/api";

interface IPostsGetResp {
    status: REQUEST_STATUS;
    data: IPost[];
}

export const fetchPosts = createAsyncThunk<IPostsGetResp | null, undefined, ThunkOptions>(
    "postsSlice/fetchPosts",
    async (payload, { dispatch, getState, rejectWithValue }) => {
        try {
            const {
                posts: { postsList }
            } = getState();

            if (postsList.data.length) return null;

            const { status, data } = await getPosts();

            return { status, data };
        } catch (err: any) {
            return errorHandle({ err, rejectWithValue, dispatch });
        }
    }
);

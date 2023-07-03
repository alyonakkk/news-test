import { createAsyncThunk } from "@reduxjs/toolkit";

import { addNotificationMessage } from "@/entities/notification";
import { REQUEST_STATUS, ThunkOptions } from "@/shared/api/types";
import { errorHandle } from "@/shared/lib/helpers";

import { IPost, TPostData } from "../../../lib/types";
import { createPost } from "../../api/api";

interface IPostAddResp {
    status: REQUEST_STATUS;
    data: IPost;
}

interface IPostAddPayload {
    post: TPostData;
    cb: () => void;
}

export const fetchAddPost = createAsyncThunk<IPostAddResp, IPostAddPayload, ThunkOptions>(
    "postsSlice/fetchAddPost",
    async (payload, { dispatch, rejectWithValue }) => {
        try {
            const { post, cb } = payload;
            const { status, data, message } = await createPost(post);

            cb();

            if (message) {
                dispatch(addNotificationMessage({ message, status: "success" }));
            }

            return { status, data };
        } catch (err: any) {
            return errorHandle({ err, rejectWithValue, dispatch });
        }
    }
);

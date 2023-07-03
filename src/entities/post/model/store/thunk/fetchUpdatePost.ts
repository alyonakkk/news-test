import { createAsyncThunk } from "@reduxjs/toolkit";

import { addNotificationMessage } from "@/entities/notification";
import { REQUEST_STATUS, ThunkOptions } from "@/shared/api/types";
import { errorHandle } from "@/shared/lib/helpers";

import { IPost, TPostData } from "../../../lib/types";
import { updatePost } from "../../api/api";
import { removeLoading, setLoading } from "../PostSlice";

interface IPostUpdateResp {
    status: REQUEST_STATUS;
    data: IPost;
}

interface IPostUpdatePayload {
    post: Required<TPostData>;
    cb: () => void;
}

export const fetchUpdatePost = createAsyncThunk<IPostUpdateResp, IPostUpdatePayload, ThunkOptions>(
    "postsSlice/fetchUpdatePost",
    async (payload, { dispatch, rejectWithValue }) => {
        try {
            const { post, cb } = payload;

            await dispatch(setLoading(post.id));

            const { status, data, message } = await updatePost(post);

            await dispatch(removeLoading(post.id));

            if (message) {
                dispatch(addNotificationMessage({ message, status: "success" }));
            }

            cb();

            return { status, data };
        } catch (err: any) {
            return errorHandle({ err, rejectWithValue, dispatch });
        }
    }
);

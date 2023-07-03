import { createAsyncThunk } from "@reduxjs/toolkit";

import { addNotificationMessage } from "@/entities/notification";
import { REQUEST_STATUS, ThunkOptions } from "@/shared/api/types";
import { errorHandle } from "@/shared/lib/helpers";

import { deletePost } from "../../api/api";
import { removeLoading, setLoading } from "../PostSlice";

interface IPostDeleteResp {
    status: REQUEST_STATUS;
    data: {
        postId: number;
    };
}

export const fetchDeletePost = createAsyncThunk<IPostDeleteResp, number, ThunkOptions>(
    "postsSlice/fetchDeletePost",
    async (payload, { dispatch, rejectWithValue }) => {
        try {
            await dispatch(setLoading(payload));

            const { status, data, message } = await deletePost(payload);

            await dispatch(removeLoading(payload));

            if (message) {
                dispatch(addNotificationMessage({ message, status: "success" }));
            }

            return { status, data: { postId: data.id } };
        } catch (err: any) {
            return errorHandle({ err, rejectWithValue, dispatch });
        }
    }
);

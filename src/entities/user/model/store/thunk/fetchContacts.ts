import { createAsyncThunk } from "@reduxjs/toolkit";

import { addNotificationMessage } from "@/entities/notification";
import { ThunkOptions } from "@/shared/api/types";
import { errorHandle } from "@/shared/lib/helpers";

import { IUserContact } from "../../../lib/types";
import { postContacts } from "../../api/api";

export const fetchContacts = createAsyncThunk<undefined, IUserContact, ThunkOptions>(
    "userSlice/fetchContacts",
    async (payload, { dispatch, rejectWithValue }) => {
        try {
            const { message } = await postContacts(payload);

            if (message) {
                dispatch(addNotificationMessage({ message, status: "success" }));
            }
        } catch (err: any) {
            return errorHandle({ err, rejectWithValue, dispatch });
        }
    }
);

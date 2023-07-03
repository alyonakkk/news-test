import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { REQUEST_STATUS } from "@/shared/api/types";

import { IPost, IPostCategory, IPostFilter, TPostsFilter } from "../../lib/types";
import { fetchAddPost, fetchCategories, fetchDeletePost, fetchFilters, fetchPosts, fetchUpdatePost } from "./index";

interface IInitState {
    postsList: {
        status: REQUEST_STATUS;
        data: IPost[];
        loading: number[];
    };
    filterList: {
        status: REQUEST_STATUS;
        active: TPostsFilter;
        data: IPostFilter[];
    };
    categoriesList: {
        status: REQUEST_STATUS;
        data: IPostCategory[];
    };
}

const initialState: IInitState = {
    postsList: {
        status: REQUEST_STATUS.SUCCESS,
        data: [],
        loading: []
    },
    filterList: {
        status: REQUEST_STATUS.SUCCESS,
        active: "all",
        data: []
    },
    categoriesList: {
        status: REQUEST_STATUS.SUCCESS,
        data: []
    }
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setFilter: (state: IInitState, action: PayloadAction<TPostsFilter>) => {
            state.filterList.active = action.payload;
        },
        setLoading: (state: IInitState, action: PayloadAction<number>) => {
            state.postsList.loading.push(action.payload);
        },
        removeLoading: (state: IInitState, action: PayloadAction<number>) => {
            state.postsList.loading = state.postsList.loading.filter((id) => id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        // fetchFilters
        builder.addCase(fetchFilters.pending, (state: IInitState) => {
            state.filterList.status = REQUEST_STATUS.PENDING;
        });
        builder.addCase(fetchFilters.fulfilled, (state: IInitState, { payload }) => {
            if (!payload) {
                state.filterList.status = REQUEST_STATUS.SUCCESS;

                return;
            }

            const { data, status } = payload;

            state.filterList.data = data;
            state.filterList.status = status;
        });
        builder.addCase(fetchFilters.rejected, (state: IInitState) => {
            state.filterList.status = REQUEST_STATUS.FAILED;
        });

        // fetchCategories
        builder.addCase(fetchCategories.pending, (state: IInitState) => {
            state.categoriesList.status = REQUEST_STATUS.PENDING;
        });
        builder.addCase(fetchCategories.fulfilled, (state: IInitState, { payload }) => {
            if (!payload) {
                state.categoriesList.status = REQUEST_STATUS.SUCCESS;

                return;
            }

            const { data, status } = payload;

            state.categoriesList.data = data;
            state.categoriesList.status = status;
        });
        builder.addCase(fetchCategories.rejected, (state: IInitState) => {
            state.categoriesList.status = REQUEST_STATUS.FAILED;
        });

        // fetchPosts
        builder.addCase(fetchPosts.pending, (state: IInitState) => {
            state.postsList.status = REQUEST_STATUS.PENDING;
        });
        builder.addCase(fetchPosts.fulfilled, (state: IInitState, { payload }) => {
            if (!payload) {
                state.postsList.status = REQUEST_STATUS.SUCCESS;

                return;
            }

            const { data, status } = payload;

            state.postsList.data = data;
            state.postsList.status = status;
        });
        builder.addCase(fetchPosts.rejected, (state: IInitState) => {
            state.postsList.status = REQUEST_STATUS.FAILED;
        });

        // fetchAddPost
        builder.addCase(fetchAddPost.fulfilled, (state: IInitState, { payload: { data, status } }) => {
            state.postsList.data.push(data);
            state.postsList.status = status;
        });

        // fetchDeletePost
        builder.addCase(fetchDeletePost.fulfilled, (state: IInitState, { payload: { data, status } }) => {
            state.postsList.data = state.postsList.data.filter((post) => post.id !== data.postId);
            state.postsList.status = status;
        });

        // fetchUpdatePost
        builder.addCase(fetchUpdatePost.fulfilled, (state: IInitState, { payload: { data, status } }) => {
            const productIndex = state.postsList.data.findIndex((post) => post.id === data.id);

            state.postsList.data[productIndex] = data;
            state.postsList.status = status;
        });
    }
});

export const { setFilter, setLoading, removeLoading } = postsSlice.actions;

export const postsReducer = postsSlice.reducer;

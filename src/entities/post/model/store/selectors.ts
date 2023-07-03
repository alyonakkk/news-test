import { createSelector } from "@reduxjs/toolkit";

import { AppState } from "@/shared/config/store";

export const selectPostsData = (state: AppState) => state.posts.postsList.data;
export const selectPostsStatus = (state: AppState) => state.posts.postsList.status;
export const selectPostsLoading = (state: AppState) => state.posts.postsList.loading;

export const selectCategoriesData = (state: AppState) => state.posts.categoriesList.data;
export const selectCategoriesStatus = (state: AppState) => state.posts.categoriesList.status;

export const selectFiltersData = (state: AppState) => state.posts.filterList.data;
export const selectFiltersStatus = (state: AppState) => state.posts.filterList.status;
export const selectActiveFilter = (state: AppState) => state.posts.filterList.active;

export const selectFilteredPosts = createSelector([selectPostsData, selectActiveFilter], (posts, filter) => {
    if (filter === "all") return [...posts].reverse();

    return posts.filter((post) => post.category.value === filter);
});

export const selectIsLoadingPost = createSelector(
    [selectPostsLoading, (state, postId: number) => postId],
    (posts, postId) => {
        return !!posts.find((id) => id === postId);
    }
);

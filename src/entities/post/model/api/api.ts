import { CATEGORIES_DATA, FILTERS_DATA, POSTS_DATA } from "@/shared/api/mock";
import { ApiRes, REQUEST_STATUS } from "@/shared/api/types";

import { IPost, IPostCategory, IPostFilter, TPostData } from "../../lib/types";

export async function getPosts(): Promise<ApiRes<IPost[]>> {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: REQUEST_STATUS.SUCCESS,
                data: POSTS_DATA
            });
        }, 0);
    });
}

export async function createPost(post: TPostData): Promise<ApiRes<IPost>> {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: REQUEST_STATUS.SUCCESS,
                data: {
                    ...post,
                    id: Date.now(),
                    category: CATEGORIES_DATA.find((category) => category.id === +post.category) as IPostCategory
                },
                message: "Пост успешно создан!"
            });
        }, 2000);
    });
}

export async function updatePost(post: Required<TPostData>): Promise<ApiRes<IPost>> {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: REQUEST_STATUS.SUCCESS,
                data: {
                    ...post,
                    category: CATEGORIES_DATA.find((category) => category.id === +post.category) as IPostCategory
                },
                message: "Пост успешно обновлен!"
            });
        }, 2000);
    });
}

export async function deletePost(postId: number): Promise<ApiRes<{ id: number }>> {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: REQUEST_STATUS.SUCCESS,
                data: {
                    id: postId
                },
                message: "Пост успешно удален!"
            });
        }, 2000);
    });
}

export async function getCategories(): Promise<ApiRes<IPostCategory[]>> {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: REQUEST_STATUS.SUCCESS,
                data: CATEGORIES_DATA
            });
        }, 0);
    });
}

export async function getFilters(): Promise<ApiRes<IPostFilter[]>> {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: REQUEST_STATUS.SUCCESS,
                data: FILTERS_DATA
            });
        }, 0);
    });
}

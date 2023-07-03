export type TPostsCategories = "people" | "blockchain" | "nft" | "crypto" | "engineering";

export type TPostsFilter = TPostsCategories | "all";

export interface IPost {
    id: number;
    category: IPostCategory;
    title: string;
    description: string;
    image?: File | null;
    readTime: number;
}

export type TPostData = Omit<IPost, "id" | "category"> & {
    id?: number;
    category: number;
};

export interface IPostFilter {
    id: number;
    title: string;
    value: TPostsFilter;
}

export interface IPostCategory {
    id: number;
    title: string;
    value: TPostsCategories;
}

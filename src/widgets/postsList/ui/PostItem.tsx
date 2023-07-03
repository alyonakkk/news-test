import { FC, memo } from "react";

import { PostCard, selectIsLoadingPost } from "@/entities/post";
import { IPost, TPostData } from "@/entities/post";
import { useAppSelector } from "@/shared/config/store";

interface IPostItem {
    item: IPost;
    onEdit: (post: Required<TPostData>) => void;
    onDelete: (id: number) => void;
}

const PostItem: FC<IPostItem> = ({ item, onEdit, onDelete }) => {
    const isLoading = useAppSelector((state) => selectIsLoadingPost(state, item.id));

    return (
        <PostCard
            isLoading={isLoading}
            onDelete={onDelete}
            onEdit={(post) => onEdit(post as Required<TPostData>)}
            post={item}
        />
    );
};

export default memo(PostItem);

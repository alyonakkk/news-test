import { FC, useCallback, useState } from "react";

import { fetchDeletePost, selectFilteredPosts, selectPostsStatus, TPostData } from "@/entities/post";
import EditPostModal from "@/features/editPostModal";
import { REQUEST_STATUS } from "@/shared/api/types";
import { useAppDispatch, useAppSelector } from "@/shared/config/store";
import { Loader } from "@/shared/ui/loader";

import PostItem from "./PostItem";

const PostsList: FC = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(selectFilteredPosts);
    const status = useAppSelector(selectPostsStatus);
    const [modalState, setModalState] = useState<{ isOpen: boolean; post: TPostData | null }>({
        isOpen: false,
        post: null
    });
    const editPost = useCallback((post: Required<TPostData>) => {
        setModalState({
            isOpen: true,
            post
        });
    }, []);
    const deletePost = useCallback((id: number) => {
        dispatch(fetchDeletePost(id));
    }, []);
    const postsList = posts.map((post) => {
        return <PostItem key={post.id} item={post} onDelete={deletePost} onEdit={editPost} />;
    });

    if (status === REQUEST_STATUS.PENDING) return <Loader />;

    function closeModal() {
        setModalState({
            isOpen: false,
            post: null
        });
    }

    return (
        <>
            {!!posts.length ? (
                <ul className={"flex flex-col gap-7"}>{postsList}</ul>
            ) : (
                <div className={"flex justify-center"}>
                    <p>Посты не найдены :(</p>
                </div>
            )}
            {modalState.post && (
                <EditPostModal onClose={closeModal} isOpen={modalState.isOpen} post={modalState.post} />
            )}
        </>
    );
};

export default PostsList;

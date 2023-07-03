import { FC, useState } from "react";

import { fetchUpdatePost, TPostData } from "@/entities/post";
import PostForm from "@/features/postForm";
import { useAppDispatch } from "@/shared/config/store";
import Modal from "@/shared/ui/modal";

interface IEditPostModal {
    isOpen: boolean;
    onClose: () => void;
    post: TPostData;
}

const EditPostModal: FC<IEditPostModal> = ({ isOpen, onClose, post }) => {
    const dispatch = useAppDispatch();
    const [isLoadingSubmit, setIsLoadingSubmit] = useState<boolean>(false);

    async function submitForm(data: TPostData) {
        setIsLoadingSubmit(true);

        await dispatch(
            fetchUpdatePost({
                post: data as Required<TPostData>,
                cb: onClose
            })
        );

        setIsLoadingSubmit(false);
    }

    return (
        <Modal title={"Редактирование поста"} isOpen={isOpen} onClose={onClose}>
            <PostForm isLoading={isLoadingSubmit} isOpen={isOpen} defaultValue={post} onSubmit={submitForm} />
        </Modal>
    );
};

export default EditPostModal;

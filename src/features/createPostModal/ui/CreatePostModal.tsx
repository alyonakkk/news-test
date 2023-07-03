import { FC, useState } from "react";

import { fetchAddPost, TPostData } from "@/entities/post";
import PostForm from "@/features/postForm";
import { useAppDispatch } from "@/shared/config/store";
import Modal from "@/shared/ui/modal";

interface ICreatePostModal {
    isOpen: boolean;
    onClose: () => void;
}

const CreatePostModal: FC<ICreatePostModal> = ({ isOpen, onClose }) => {
    const dispatch = useAppDispatch();
    const [isLoadingSubmit, setIsLoadingSubmit] = useState<boolean>(false);

    async function submitForm(data: TPostData) {
        setIsLoadingSubmit(true);

        await dispatch(
            fetchAddPost({
                post: data,
                cb: onClose
            })
        );

        setIsLoadingSubmit(false);
    }

    return (
        <>
            <Modal title={"Создание поста"} isOpen={isOpen} onClose={onClose}>
                <PostForm isLoading={isLoadingSubmit} isOpen={isOpen} onSubmit={submitForm} />
            </Modal>
        </>
    );
};

export default CreatePostModal;

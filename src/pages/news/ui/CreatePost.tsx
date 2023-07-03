import { FC, useState } from "react";

import { selectIsAuth } from "@/entities/user";
import CreatePostModal from "@/features/createPostModal";
import AddIcon from "@/shared/assets/icons/add.svg";
import { useAppSelector } from "@/shared/config/store";

const CreatePost: FC = () => {
    const isAuth = useAppSelector(selectIsAuth);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    if (!isAuth) return null;

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <button className={"btn w-max self-center"} onClick={openModal}>
                <AddIcon className={"w-[24px] h-[24px]"} />
                Создать пост
            </button>
            <CreatePostModal isOpen={isOpen} onClose={closeModal} />
        </>
    );
};

export default CreatePost;

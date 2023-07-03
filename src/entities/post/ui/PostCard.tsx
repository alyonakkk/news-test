import { FC } from "react";

import TimeIcon from "@/shared/assets/icons/time.svg";
import Image from "@/shared/ui/image";
import { LoaderFull } from "@/shared/ui/loader";

import { IPost, TPostData } from "../lib/types";
import Actions from "./Actions";
import Description from "./Description";

interface IPostCard {
    post: IPost;
    isLoading: boolean;
    onEdit: (post: TPostData) => void;
    onDelete: (id: number) => void;
}

const PostCard: FC<IPostCard> = ({ post, onEdit, onDelete, isLoading }) => {
    const { id, title, description, category, readTime, image } = post;

    function handleDelete() {
        onDelete(id);
    }

    function handleEdit() {
        onEdit({
            ...post,
            category: category.id
        });
    }

    return (
        <div className={"relative card md:card-side bg-base-100 shadow-xl overflow-hidden"}>
            {isLoading && <LoaderFull />}
            <div className={"relative w-full md:min-w-[320px] md:max-w-[320px] h-full"}>
                <figure className={"bg-gray-light h-[280px]"}>
                    <Image src={image ? URL.createObjectURL(image) : undefined} name={title} />
                </figure>
                <Actions onEdit={handleEdit} onDelete={handleDelete} />
            </div>
            <div className={"relative card-body"}>
                <div className={"flex items-center gap-1"}>
                    <div className={"text-primary"}>
                        <TimeIcon className={"w-[24px] h-[24px]"} />
                    </div>
                    <span className={"text-xs"}>{readTime} мин.</span>
                </div>
                <h2 className={"card-title"}>
                    {title}
                    <div className={"badge badge-primary text-xs"}>{category.title}</div>
                </h2>
                <Description description={description} />
            </div>
        </div>
    );
};

export default PostCard;

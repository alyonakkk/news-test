import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { TPostData } from "@/entities/post";
import FormContainer from "@/shared/ui/formContainer";
import Uploader from "@/shared/ui/uploader";

import { POST_SCHEMA } from "../lib/schema";
import InputReadTime from "./InputReadTime";
import InputTitle from "./InputTitle";
import SelectCategory from "./SelectCategory";
import TextAreaDescription from "./TextAreaDescription";

interface IPostForm {
    isLoading: boolean;
    isOpen: boolean;
    defaultValue?: TPostData;
    onSubmit: (data: TPostData) => void;
}

const PostForm: FC<IPostForm> = ({ isLoading, isOpen, onSubmit, defaultValue }) => {
    const [image, setImage] = useState<File | null>(null);
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm<Omit<TPostData, "image">>({
        resolver: yupResolver(POST_SCHEMA),
        defaultValues: defaultValue ?? {}
    });

    useEffect(() => {
        reset(defaultValue ?? {});
        setImage(defaultValue?.image ?? null);
    }, [isOpen]);

    function handleImage(image: File | null) {
        setImage(image);
    }

    function handleSubmitForm(data: TPostData) {
        onSubmit({
            ...data,
            image
        });
    }

    return (
        <FormContainer onSubmit={handleSubmit(handleSubmitForm)} submitTitle={"Cохранить"} isLoading={isLoading}>
            <div className={"flex flex-col gap-1 w-full"}>
                <Uploader file={image} accept={".svg,.png,.jpg"} onChange={handleImage} />
                <SelectCategory control={control} error={(errors["category"]?.message ?? "").toString()} />
                <InputReadTime control={control} error={(errors["readTime"]?.message ?? "").toString()} />
                <InputTitle control={control} error={(errors["title"]?.message ?? "").toString()} />
                <TextAreaDescription control={control} error={(errors["description"]?.message ?? "").toString()} />
            </div>
        </FormContainer>
    );
};

export default PostForm;

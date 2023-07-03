import { ChangeEvent, FC, useEffect, useRef, useState } from "react";

import DeleteIcon from "@/shared/assets/icons/delete.svg";
import AddPhotoIcon from "@/shared/assets/icons/upload.svg";

interface IUploader {
    file: File | null;
    accept?: string;
    onChange: (file: File | null) => void;
}

const Uploader: FC<IUploader> = ({ accept = "", onChange, file }) => {
    const [value, setValue] = useState<File | null>(file);
    const refFile = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        setValue(file);
    }, [file]);

    function handleUploader(e: ChangeEvent<HTMLInputElement>) {
        onChange(e.target.files?.[0] ?? null);
        setValue(e.target.files?.[0] ?? null);
    }

    function handleDelete() {
        if (!refFile.current) return;

        refFile.current.value = "";
        onChange(null);
    }

    return (
        <div className={"relative flex justify-center items-center h-[280px] bg-gray-light rounded-md overflow-hidden"}>
            {value ? (
                <>
                    <img className={"w-full h-full"} src={URL.createObjectURL(value)} />
                    <button
                        type={"button"}
                        className={"absolute top-2 right-2 z-10 btn btn-error btn-sm"}
                        onClick={handleDelete}
                    >
                        <DeleteIcon className={"w-[24px] h-[24px]"} />
                    </button>
                </>
            ) : (
                <AddPhotoIcon className={"w-[128px] h-[128px]"} />
            )}
            <input
                ref={refFile}
                accept={accept}
                onChange={handleUploader}
                type={"file"}
                className={"absolute top-0 bottom-0 right-0 left-0 opacity-0"}
            />
        </div>
    );
};

export default Uploader;

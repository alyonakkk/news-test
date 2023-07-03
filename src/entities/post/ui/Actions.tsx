import { FC } from "react";

import { selectIsAuth } from "@/entities/user";
import DeleteIcon from "@/shared/assets/icons/delete.svg";
import EditIcon from "@/shared/assets/icons/edit.svg";
import { useAppSelector } from "@/shared/config/store";

interface IActions {
    onEdit: () => void;
    onDelete: () => void;
}

const Actions: FC<IActions> = ({ onEdit, onDelete }) => {
    const isAuth = useAppSelector(selectIsAuth);

    if (!isAuth) return null;

    return (
        <div className={"absolute top-3 right-3 flex gap-2"}>
            <button className={"btn btn-primary btn-sm"}>
                <EditIcon className={"w-[24px] h-[24px]"} onClick={onEdit} />
            </button>
            <button className={"btn btn-error btn-sm"} onClick={onDelete}>
                <DeleteIcon className={"w-[24px] h-[24px]"} />
            </button>
        </div>
    );
};

export default Actions;

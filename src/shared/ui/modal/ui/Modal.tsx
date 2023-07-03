import { FC, ReactNode } from "react";

interface IModal {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: FC<IModal> = ({ title, isOpen, onClose, children }) => {
    return (
        <div className={`modal ${isOpen ? "modal-open" : ""}`}>
            <div className={"modal-box"}>
                <h3 className={"mb-10 text-lg font-bold"}>{title}</h3>
                <button className={"btn btn-sm btn-circle btn-ghost absolute right-2 top-2"} onClick={onClose}>
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;

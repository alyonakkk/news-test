import { FC, memo } from "react";

import { INotification } from "../lib/types";

interface INotificationItem {
    notification: INotification;
    onClose: (id: number) => void;
}

const alertStatus = {
    success: "alert-success",
    info: "alert-info",
    error: "alert-error"
};

const NotificationItem: FC<INotificationItem> = ({ notification, onClose }) => {
    const { id, message, status } = notification;

    function handleClose() {
        onClose(id);
    }

    return (
        <div className={`relative alert ${alertStatus[status]} w-[280px]`}>
            <span>{message}</span>
            <button onClick={handleClose} className={"btn btn-xs btn-circle btn-ghost absolute right-[2px] top-[2px]"}>
                ✕
            </button>
        </div>
    );
};

export default memo(NotificationItem);

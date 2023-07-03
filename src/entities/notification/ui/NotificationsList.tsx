import { FC, useCallback } from "react";

import { useAppDispatch, useAppSelector } from "@/shared/config/store";

import { removeNotification, selectNotifications } from "../model/store";
import NotificationItem from "./NotificationItem";

const NotificationsList: FC = () => {
    const dispatch = useAppDispatch();
    const notifications = useAppSelector(selectNotifications);
    const handleDelete = useCallback((id: number) => {
        dispatch(removeNotification(id));
    }, []);
    const notificationsList = notifications.map((notification) => {
        return (
            <li key={notification.id}>
                <NotificationItem notification={notification} onClose={handleDelete} />
            </li>
        );
    });

    return <ul className={"fixed bottom-5 right-5 flex flex-col gap-5"}>{notificationsList}</ul>;
};

export default NotificationsList;

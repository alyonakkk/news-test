import { AppState } from "@/shared/config/store";

export const selectNotifications = (state: AppState) => state.notifications.notificationsList;

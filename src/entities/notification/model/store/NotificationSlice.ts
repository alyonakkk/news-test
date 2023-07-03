import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppDispatch } from "@/shared/config/store";

import { INotification } from "../../lib/types";

interface IInitState {
    notificationsList: INotification[];
}

const initialState: IInitState = {
    notificationsList: []
};

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        addNotification: (state: IInitState, action: PayloadAction<Omit<INotification, "id">>) => {
            state.notificationsList.push({
                id: Date.now(),
                ...action.payload
            });
        },
        removeNotification: (state: IInitState, action: PayloadAction<number>) => {
            state.notificationsList = state.notificationsList.filter(
                (notification) => notification.id !== action.payload
            );
        }
    }
});

export const addNotificationMessage = (notification: Omit<INotification, "id">) => (dispatch: AppDispatch) => {
    const { addNotification } = notificationSlice.actions;

    dispatch(addNotification(notification));
};

export const { addNotification, removeNotification } = notificationSlice.actions;

export const notificationReducer = notificationSlice.reducer;

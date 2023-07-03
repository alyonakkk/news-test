import { addNotificationMessage } from "@/entities/notification/model/store/NotificationSlice";
import { AppDispatch } from "@/shared/config/store";

interface IErrorHandle {
    err: any;
    rejectWithValue: (error: string) => any;
    dispatch: AppDispatch;
}

function errorHandle({ err, rejectWithValue, dispatch }: IErrorHandle) {
    dispatch(addNotificationMessage({ status: "error", message: err.message }));

    return rejectWithValue(err.message);
}

export default errorHandle;

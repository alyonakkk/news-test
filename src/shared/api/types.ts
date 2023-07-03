import { AppDispatch, AppState } from "@/shared/config/store";

export type ApiRes<T> = {
    status: REQUEST_STATUS;
    data: T;
    message?: string;
};

export interface IErrors {
    message: string;
    code: number;
}

export enum REQUEST_STATUS {
    PENDING = "pending",
    SUCCESS = "success",
    FAILED = "failed",
    ERROR = "error"
}

export interface ThunkOptions {
    state: AppState;
    dispatch: AppDispatch;
    rejectValue: string;
}

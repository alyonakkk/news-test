import { AppState } from "@/shared/config/store";

export const selectUserData = (state: AppState) => state.user.data;
export const selectUserStatus = (state: AppState) => state.user.status;
export const selectIsAuth = (state: AppState) => state.user.isAuth;

export { ILogin, IUser, IUserContact } from "./lib/types";
export {
    fetchContacts,
    fetchLogin,
    fetchLogout,
    fetchUpdateUser,
    fetchUser,
    selectIsAuth,
    selectUserData,
    selectUserStatus,
    setAuth,
    userReducer
} from "./model/store";

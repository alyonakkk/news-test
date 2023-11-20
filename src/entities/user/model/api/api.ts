import Cookies from "js-cookie";

import { USER_DATA } from "@/shared/api/mock";
import { ApiRes, REQUEST_STATUS } from "@/shared/api/types";
import { TOKEN_NAME } from "@/shared/lib/constants";

import { ILogin, IUser, IUserContact } from "../../lib/types";

export async function login(data: ILogin): Promise<ApiRes<null>> {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            const { login, password } = data;

            if (login === "user" && password === "12345") {
                Cookies.set(TOKEN_NAME, "token");

                resolve({
                    status: REQUEST_STATUS.SUCCESS,
                    data: null
                });
            } else {
                reject(new Error("Пользователь не найден"));
            }
        }, 2000);
    });
}

export async function logout(): Promise<ApiRes<null>> {
    return await new Promise((resolve) => {
        setTimeout(() => {
            Cookies.remove(TOKEN_NAME);

            resolve({
                status: REQUEST_STATUS.SUCCESS,
                data: null
            });
        }, 0);
    });
}

export async function getUser(): Promise<ApiRes<IUser>> {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: REQUEST_STATUS.SUCCESS,
                data: USER_DATA
            });
        }, 2000);
        
}

export async function updateUser(user: IUser): Promise<ApiRes<IUser>> {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: REQUEST_STATUS.SUCCESS,
                data: user,
                message: "Данные успешно обновлены"
            });
        }, 2000);
    });
}

export async function postContacts(user: IUserContact): Promise<ApiRes<null>> {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: REQUEST_STATUS.SUCCESS,
                data: null,
                message: "Ваша заявка успешно отправлена!"
            });
        }, 2000);
    });
}

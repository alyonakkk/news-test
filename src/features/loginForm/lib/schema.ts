import * as yup from "yup";

export const LOGIN_SCHEMA = yup.object().shape({
    login: yup.string().required("Введите логин"),
    password: yup.string().required("Введите пароль")
});

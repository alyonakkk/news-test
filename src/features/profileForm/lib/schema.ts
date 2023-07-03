import * as yup from "yup";

import { validateDigits, validatePhone } from "@/shared/lib/helpers";

export const PROFILE_SCHEMA = yup.object().shape({
    name: yup.string().required("Введите имя"),
    surname: yup.string().required("Введите фамилию"),
    age: yup
        .number()
        .required("Введите возраст")
        .test("Digits only", "Ваш возраст не может быть меньше 18 лет", (value) => validateDigits(value?.toString()))
        .min(18, "Ваш возраст не может быть меньше 18 лет")
        .max(100, "Ваш возраст не может быть больше 100 лет"),
    phone: yup.string().test("length", "Неккоректный номер телефона", validatePhone).required("Введите телефон")
});

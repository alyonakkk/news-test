import * as yup from "yup";

import { validateDigits } from "@/shared/lib/helpers";

export const POST_SCHEMA = yup.object().shape({
    title: yup.string().required("Заполните название поста"),
    description: yup.string().required("Заполните контентную часть поста"),
    readTime: yup
        .number()
        .required("Заполните время чтения поста")
        .test("Digits only", "Вы не можете ввести меньше 1 минуты", (value) => validateDigits(value?.toString()))
        .min(1, "Вы не можете ввести меньше 1 минуты")
        .max(60, "Вы не можете ввести больше 60 минут"),
    category: yup.number().required("Выберите категорию")
});

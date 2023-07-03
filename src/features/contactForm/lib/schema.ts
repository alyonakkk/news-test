import * as yup from "yup";

import { validatePhone } from "@/shared/lib/helpers";

export const CONTACT_SCHEMA = yup.object().shape({
    name: yup.string().required("Введите имя"),
    email: yup.string().email("Неверный формат почты").required("Введите почту"),
    phone: yup.string().test("length", "Неккоректный номер телефона", validatePhone).required("Введите телефон")
});

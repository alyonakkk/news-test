import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { fetchContacts, IUserContact } from "@/entities/user";
import { useAppDispatch } from "@/shared/config/store";
import FormContainer from "@/shared/ui/formContainer";
import Input from "@/shared/ui/input";

import { CONTACT_SCHEMA } from "../lib/schema";

const ContactForm: FC = () => {
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm<IUserContact>({
        resolver: yupResolver(CONTACT_SCHEMA)
    });

    async function onSubmit(data: IUserContact) {
        console.log(data);
        setIsLoading(true);

        await dispatch(fetchContacts(data));

        setIsLoading(false);

        reset();
    }

    return (
        <FormContainer
            isLoading={isLoading}
            submitTitle={"Отправить"}
            onSubmit={handleSubmit(onSubmit)}
            formStyle={"w-full"}
        >
            <div className={"flex flex-col gap-1 w-full"}>
                <Controller
                    render={({ field: { value, onChange } }) => (
                        <Input
                            value={value}
                            onChangeInput={onChange}
                            errorMessage={(errors["name"]?.message ?? "").toString()}
                            isError={!!errors["name"]?.message}
                            label={"Ваше имя"}
                        />
                    )}
                    name={"name"}
                    control={control}
                    defaultValue={""}
                />
                <Controller
                    render={({ field: { value, onChange } }) => (
                        <Input
                            type={"email"}
                            value={value}
                            onChangeInput={onChange}
                            errorMessage={(errors["email"]?.message ?? "").toString()}
                            isError={!!errors["email"]?.message}
                            label={"Вааша почта"}
                        />
                    )}
                    name={"email"}
                    control={control}
                    defaultValue={""}
                />
                <Controller
                    render={({ field: { value, onChange } }) => (
                        <Input
                            mask={"+7 (999) 999-99-99"}
                            type={"tel"}
                            value={value}
                            onChangeInput={onChange}
                            errorMessage={(errors["phone"]?.message ?? "").toString()}
                            isError={!!errors["phone"]?.message}
                            label={"Ваш номер телефона"}
                        />
                    )}
                    name={"phone"}
                    control={control}
                    defaultValue={""}
                />
            </div>
        </FormContainer>
    );
};

export default ContactForm;

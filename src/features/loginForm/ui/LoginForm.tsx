import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { fetchLogin, ILogin } from "@/entities/user";
import { ROUTES } from "@/shared/config/router/types";
import { useAppDispatch } from "@/shared/config/store";
import FormContainer from "@/shared/ui/formContainer";
import Input from "@/shared/ui/input";

import { LOGIN_SCHEMA } from "../lib/schema";

const LoginForm: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm<ILogin>({
        resolver: yupResolver(LOGIN_SCHEMA)
    });

    async function onSubmit(data: ILogin) {
        setIsLoading(true);

        await dispatch(
            fetchLogin({
                loginData: data,
                cb: () => {
                    navigate(ROUTES.profile);
                }
            })
        );

        reset();

        setIsLoading(false);
    }

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)} submitTitle={"Войти"} isLoading={isLoading}>
            <div className={"flex flex-col gap-1 w-full"}>
                <Controller
                    render={({ field: { value, onChange } }) => (
                        <Input
                            value={value}
                            onChangeInput={onChange}
                            errorMessage={(errors["login"]?.message ?? "").toString()}
                            isError={!!errors["login"]?.message}
                            label={"Логин"}
                        />
                    )}
                    name={"login"}
                    control={control}
                    defaultValue={""}
                />
                <Controller
                    render={({ field: { value, onChange } }) => (
                        <Input
                            type={"password"}
                            value={value}
                            onChangeInput={onChange}
                            errorMessage={(errors["password"]?.message ?? "").toString()}
                            isError={!!errors["password"]?.message}
                            label={"Пароль"}
                        />
                    )}
                    name={"password"}
                    control={control}
                    defaultValue={""}
                />
            </div>
        </FormContainer>
    );
};

export default LoginForm;

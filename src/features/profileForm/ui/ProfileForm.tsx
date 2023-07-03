import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { fetchUpdateUser, IUser, selectUserData, selectUserStatus } from "@/entities/user";
import { REQUEST_STATUS } from "@/shared/api/types";
import { useAppDispatch, useAppSelector } from "@/shared/config/store";
import FormContainer from "@/shared/ui/formContainer";
import Input from "@/shared/ui/input";
import { Loader } from "@/shared/ui/loader";

import { PROFILE_SCHEMA } from "../lib/schema";

const ProfileForm: FC = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUserData);
    const status = useAppSelector(selectUserStatus);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm<IUser>({
        resolver: yupResolver(PROFILE_SCHEMA)
    });

    useEffect(() => {
        reset(user);
    }, [user]);

    if (status === REQUEST_STATUS.PENDING) return <Loader />;

    async function onSubmit(data: IUser) {
        setIsLoading(true);

        await dispatch(fetchUpdateUser(data));

        setIsLoading(false);
    }

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)} isLoading={isLoading} submitTitle={"Сохранить"}>
            <div className={"flex flex-col gap-1 w-full"}>
                <Controller
                    render={({ field: { value, onChange } }) => (
                        <Input
                            value={value}
                            onChangeInput={onChange}
                            errorMessage={(errors["name"]?.message ?? "").toString()}
                            isError={!!errors["name"]?.message}
                            label={"Имя"}
                        />
                    )}
                    name={"name"}
                    control={control}
                    defaultValue={""}
                />
                <Controller
                    render={({ field: { value, onChange } }) => (
                        <Input
                            value={value}
                            onChangeInput={onChange}
                            errorMessage={(errors["surname"]?.message ?? "").toString()}
                            isError={!!errors["surname"]?.message}
                            label={"Фамилия"}
                        />
                    )}
                    name={"surname"}
                    control={control}
                    defaultValue={""}
                />
                <Controller
                    render={({ field: { value, onChange } }) => (
                        <Input
                            value={value}
                            onChangeInput={onChange}
                            errorMessage={(errors["patronymic"]?.message ?? "").toString()}
                            isError={!!errors["patronymic"]?.message}
                            label={"Отчество"}
                        />
                    )}
                    name={"patronymic"}
                    control={control}
                    defaultValue={""}
                />
                <Controller
                    render={({ field: { value, onChange } }) => (
                        <Input
                            type={"number"}
                            value={value.toString()}
                            onChangeInput={(value) => onChange(+value)}
                            errorMessage={(errors["age"]?.message ?? "").toString()}
                            isError={!!errors["age"]?.message}
                            label={"Возраст"}
                        />
                    )}
                    name={"age"}
                    control={control}
                    defaultValue={0}
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
                            label={"Телефон"}
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

export default ProfileForm;

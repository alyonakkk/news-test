import { FC, memo } from "react";
import { Controller } from "react-hook-form";

import Input from "@/shared/ui/input";

import { IFieldControl } from "../lib/types";

const InputTitle: FC<IFieldControl> = ({ control, error }) => {
    return (
        <Controller
            render={({ field: { value, onChange } }) => (
                <Input
                    value={value}
                    onChangeInput={onChange}
                    errorMessage={error}
                    isError={!!error}
                    label={"Название"}
                />
            )}
            name={"title"}
            control={control}
            defaultValue={""}
        />
    );
};

export default memo(InputTitle);

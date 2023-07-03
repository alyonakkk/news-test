import { FC, memo } from "react";
import { Controller } from "react-hook-form";

import Input from "@/shared/ui/input";

import { IFieldControl } from "../lib/types";

const InputReadTime: FC<IFieldControl> = ({ control, error }) => {
    return (
        <Controller
            render={({ field: { value, onChange } }) => (
                <Input
                    type={"number"}
                    value={value.toString()}
                    onChangeInput={(value) => onChange(+value)}
                    errorMessage={error}
                    isError={!!error}
                    label={"Время чтения в минутах"}
                />
            )}
            name={"readTime"}
            control={control}
            defaultValue={1}
        />
    );
};

export default memo(InputReadTime);

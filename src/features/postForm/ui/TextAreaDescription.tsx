import { FC, memo } from "react";
import { Controller } from "react-hook-form";

import TextArea from "@/shared/ui/textarea";

import { IFieldControl } from "../lib/types";

const TextAreaDescription: FC<IFieldControl> = ({ control, error }) => {
    return (
        <Controller
            render={({ field: { value, onChange } }) => (
                <TextArea value={value} onChange={onChange} errorMessage={error} isError={!!error} label={"Описание"} />
            )}
            name={"description"}
            control={control}
            defaultValue={""}
        />
    );
};

export default memo(TextAreaDescription);

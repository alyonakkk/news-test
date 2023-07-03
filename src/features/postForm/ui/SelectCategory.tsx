import { FC, memo } from "react";
import { Controller } from "react-hook-form";
import { useSelector } from "react-redux";

import { selectCategoriesData } from "@/entities/post";
import Select from "@/shared/ui/select";

import { IFieldControl } from "../lib/types";

const SelectCategory: FC<IFieldControl> = ({ control, error }) => {
    const categories = useSelector(selectCategoriesData);

    return (
        <Controller
            render={({ field: { value, onChange } }) => (
                <Select
                    value={value?.toString()}
                    onChange={(value) => onChange(+value)}
                    errorMessage={error}
                    isError={!!error}
                    options={categories}
                    label={"Категория"}
                />
            )}
            name={"category"}
            control={control}
            defaultValue={categories?.[0]?.id ?? 1}
        />
    );
};

export default memo(SelectCategory);

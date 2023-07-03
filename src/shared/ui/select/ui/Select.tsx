import { ChangeEvent, FC, useEffect, useState } from "react";

interface ISelect {
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    isError?: boolean;
    errorMessage?: string;
    options: {
        id: number | string;
        title: string;
        isDisabled?: boolean;
    }[];
}

const Select: FC<ISelect> = ({ value = "", onChange, options, label, isError = false, errorMessage }) => {
    const [selectValue, setSelectValue] = useState<string | number>("");
    const optionsList = options.map((option) => {
        const { id, title, isDisabled = false } = option;
        return (
            <option key={id} value={id} disabled={isDisabled}>
                {title}
            </option>
        );
    });

    useEffect(() => {
        setSelectValue((value || options[0]?.id) ?? "");
    }, [value, options]);

    function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
        const currentValue = e.target.value;

        if (onChange) onChange(currentValue);
    }

    return (
        <div className={"form-control w-full"}>
            {label && (
                <label className={"label"}>
                    <span className={"label-text"}>{label}</span>
                </label>
            )}
            <select
                value={selectValue}
                onChange={handleSelect}
                className={`select select-bordered ${isError ? "select-error" : ""}`}
            >
                {optionsList}
            </select>
            {isError && errorMessage && (
                <label className={"label"}>
                    <span className={"label-text-alt text-error"}>{errorMessage}</span>
                </label>
            )}
        </div>
    );
};

export default Select;

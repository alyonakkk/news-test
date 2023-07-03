import { ChangeEvent, FC, useEffect, useState } from "react";

interface ITextArea {
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    placeholder?: string;
    isDisabled?: boolean;
    isError?: boolean;
    errorMessage?: string;
}

const TextArea: FC<ITextArea> = ({
    value = "",
    onChange,
    label,
    placeholder = "",
    isDisabled = false,
    isError = false,
    errorMessage
}) => {
    const [textAreaValue, setTextAreaValue] = useState<string>(value);

    useEffect(() => {
        setTextAreaValue(value);
    }, [value]);

    function handleTextarea(e: ChangeEvent<HTMLTextAreaElement>) {
        const currentValue = e.target.value;

        if (onChange) onChange(currentValue);
    }

    return (
        <div className="form-control w-full">
            <label className="label">{label && <span className={"label-text"}>{label}</span>}</label>
            <textarea
                value={textAreaValue}
                disabled={isDisabled}
                onChange={handleTextarea}
                placeholder={placeholder}
                className={`textarea textarea-bordered h-24 ${isError ? "textarea-error" : ""}`}
            />
            <label className={"label"}>
                {isError && errorMessage && <span className={"label-text-alt text-error"}>{errorMessage}</span>}
            </label>
        </div>
    );
};

export default TextArea;

import { ChangeEvent, FC, InputHTMLAttributes, useEffect, useState } from "react";
import InputMask from "react-input-mask";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    value?: string;
    mask?: string;
    onChangeInput: (value: string) => void;
    label?: string;
    placeholder?: string;
    isDisabled?: boolean;
    isError?: boolean;
    errorMessage?: string;
}

const Input: FC<IInput> = ({
    type = "text",
    value = "",
    mask,
    onChangeInput,
    label,
    placeholder = "",
    isDisabled = false,
    isError = false,
    errorMessage,
    ...props
}) => {
    const [inputValue, setInputValue] = useState<string>(value);
    const style = `input input-bordered w-full ${isError ? "input-error" : ""}`;

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        const currentValue = e.target.value;

        onChangeInput(currentValue);
    }

    return (
        <div className="form-control w-full">
            <label className="label">{label && <span className={"label-text"}>{label}</span>}</label>
            {mask ? (
                <InputMask
                    autoComplete={"off"}
                    mask={mask}
                    value={inputValue}
                    disabled={isDisabled}
                    onChange={handleInput}
                    placeholder={placeholder}
                    className={style}
                    {...props}
                />
            ) : (
                <input
                    type={type}
                    value={inputValue}
                    disabled={isDisabled}
                    onChange={handleInput}
                    placeholder={placeholder}
                    className={style}
                    {...props}
                />
            )}
            <label className={"label"}>
                {isError && errorMessage && <span className={"label-text-alt text-error"}>{errorMessage}</span>}
            </label>
        </div>
    );
};

export default Input;

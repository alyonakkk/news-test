import { FC, memo, ReactNode } from "react";

interface IFormContainer {
    children: ReactNode;
    formStyle?: string;
    isLoading?: boolean;
    onSubmit: () => void;
    submitTitle: string;
}

const FormContainer: FC<IFormContainer> = ({ children, isLoading = false, onSubmit, submitTitle, formStyle = "" }) => {
    return (
        <form noValidate className={`m-auto flex flex-col gap-5 max-w-[500px] ${formStyle}`} onSubmit={onSubmit}>
            {children}
            <button disabled={isLoading} className={"btn btn-primary"}>
                {isLoading && <span className="loading loading-spinner" />}
                {submitTitle}
            </button>
        </form>
    );
};

export default memo(FormContainer);

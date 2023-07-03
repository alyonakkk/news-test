import { FC } from "react";

interface ILoader {
    size?: "xs" | "sm" | "md" | "lg";
}

const Loader: FC<ILoader> = ({ size = "lg" }) => {
    return (
        <div className={"flex justify-center"}>
            <span className={`loading loading-spinner loading-${size} text-primary`} />
        </div>
    );
};

export default Loader;

import { FC } from "react";

import { Loader } from "@/shared/ui/loader";

const LoaderFull: FC = () => {
    return (
        <div className={"absolute top-0 bottom-0 right-0 z-100 left-0 flex justify-center items-center w-full h-full"}>
            <div className={"z-60"}>
                <Loader />
            </div>
            <div className={"absolute z-50 w-full h-full bg-white opacity-40"} />
        </div>
    );
};

export default LoaderFull;

import { FC } from "react";

import PlugImage from "@/shared/assets/images/plug.png";

interface IImage {
    src?: string;
    name?: string;
}

const Image: FC<IImage> = ({ src, name }) => {
    return (
        <img
            className={"w-full h-full object-contain"}
            src={src ?? PlugImage}
            alt={name ?? "Изображение отсутствует"}
        />
    );
};

export default Image;

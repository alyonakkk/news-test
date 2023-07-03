import { Control } from "react-hook-form";

import { TPostData } from "@/entities/post";

export interface IFieldControl {
    control: Control<Omit<TPostData, "image">>;
    error: string;
}

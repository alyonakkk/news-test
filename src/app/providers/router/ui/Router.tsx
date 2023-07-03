import { FC } from "react";
import { RouterProvider } from "react-router-dom";

import router from "@/shared/config/router";

const Router: FC = () => {
    return <RouterProvider router={router} />;
};

export default Router;

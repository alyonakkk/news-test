import { FC } from "react";
import { Navigate } from "react-router-dom";

import { selectIsAuth } from "@/entities/user";
import { ROUTES } from "@/shared/config/router/types";
import { useAppSelector } from "@/shared/config/store";

interface IPublicOnlyRoute {
    children: JSX.Element;
}

const PublicOnlyRoute: FC<IPublicOnlyRoute> = ({ children }) => {
    const isAuth = useAppSelector(selectIsAuth);

    return !isAuth ? children : <Navigate to={ROUTES.profile} replace />;
};

export default PublicOnlyRoute;

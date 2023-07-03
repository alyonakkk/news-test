import { FC } from "react";
import { Navigate } from "react-router-dom";

import { selectIsAuth } from "@/entities/user";
import { ROUTES } from "@/shared/config/router/types";
import { useAppSelector } from "@/shared/config/store";

interface IPrivateRoute {
    children: JSX.Element;
}

const PrivateRoute: FC<IPrivateRoute> = ({ children }) => {
    const isAuth = useAppSelector(selectIsAuth);

    return isAuth ? children : <Navigate to={ROUTES.login} replace />;
};

export default PrivateRoute;

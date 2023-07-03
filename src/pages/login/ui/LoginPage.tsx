import { FC } from "react";

import LoginForm from "@/features/loginForm";
import { ROUTES } from "@/shared/config/router/types";
import { PAGE_TITLE } from "@/shared/lib/constants";
import PageTitle from "@/shared/ui/pageTitle";

const LoginPage: FC = () => {
    return (
        <>
            <PageTitle title={PAGE_TITLE[ROUTES.login]} />
            <div className={"m-auto w-full md:w-1/2"}>
                <LoginForm />
            </div>
        </>
    );
};

export default LoginPage;

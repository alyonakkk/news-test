import { FC } from "react";
import { Helmet } from "react-helmet";

import LoginForm from "@/features/loginForm";
import { ROUTES } from "@/shared/config/router/types";
import { PAGE_TITLE } from "@/shared/lib/constants";
import PageTitle from "@/shared/ui/pageTitle";

const LoginPage: FC = () => {
    return (
        <>
            <Helmet>
                <title>Авторизация</title>
                <meta name={"description"} content={"Крутая Авторизация"} />
                <meta
                    name={"keywords"}
                    content={
                        "программа долгосрочных сбережений граждан, пдс, долгосрочные сбережения, софинансирование, вступить в программу" +
                        " долгосрочных сбережений, перевести накопления опс в пдс, перевод опс, преимущества, калькулятор," +
                        " вопросы и ответы, faq, нпф сбербанка, сбернпф"
                    }
                />
                <meta property={"og:title"} content={"Авторизация"} />
                <meta property={"og:url"} content={window.location.origin + window.location.pathname} />
                <meta property={"og:description"} content={"Крутая Авторизация"} />
                <meta property={"og:site_name"} content={"Авторизация"} />
                <meta property={"og:locale"} content={"ru_RU"} />
            </Helmet>
            <PageTitle title={PAGE_TITLE[ROUTES.login]} />
            <div className={"m-auto w-full md:w-1/2"}>
                <LoginForm />
            </div>
        </>
    );
};

export default LoginPage;

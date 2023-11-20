import { FC } from "react";

import ProfileForm from "@/features/profileForm";
import { ROUTES } from "@/shared/config/router/types";
import { PAGE_TITLE } from "@/shared/lib/constants";
import PageTitle from "@/shared/ui/pageTitle";
import { Helmet } from "react-helmet";

const ProfilePage: FC = () => {
    return (
        <>
            <Helmet key={"profile"} htmlAttributes={{ lang: "ru" }}>
                <title>{PAGE_TITLE[ROUTES.profile]}</title>
                <meta name={"description"} content={"Настройки личного кабинета"} />
                <meta
                    name={"keywords"}
                    content={
                        "программа долгосрочных сбережений граждан, пдс, долгосрочные сбережения, софинансирование, вступить в программу" +
                        " долгосрочных сбережений, перевести накопления опс в пдс, перевод опс, преимущества, калькулятор," +
                        " вопросы и ответы, faq, нпф сбербанка, сбернпф"
                    }
                />
                <meta property={"og:title"} content={PAGE_TITLE[ROUTES.profile]} />
                <meta property={"og:url"} content={window.location.origin + window.location.pathname} />
                <meta property={"og:description"} content={"Настройки личного кабинета"} />
                <meta property={"og:site_name"} content={PAGE_TITLE[ROUTES.profile]} />
                <meta property={"og:locale"} content={"ru_RU"} />
            </Helmet>
            <PageTitle title={PAGE_TITLE[ROUTES.profile]} description={"Настройки личного кабинета"} />
            <div className={"m-auto w-full md:w-1/2"}>
                <ProfileForm />
            </div>
        </>
    );
};

export default ProfilePage;

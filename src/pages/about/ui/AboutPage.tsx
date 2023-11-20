import { FC } from "react";
import { Helmet } from "react-helmet";

import { ROUTES } from "@/shared/config/router/types";
import { PAGE_TITLE } from "@/shared/lib/constants";
import PageTitle from "@/shared/ui/pageTitle";
import Contacts from "@/widgets/contacts";
import Partners from "@/widgets/partners";

const AboutPage: FC = () => {
    return (
        <>
            <Helmet>
                <title>{PAGE_TITLE[ROUTES.about]}</title>
                <meta name={"description"} content={"Ознакомьтесь с нашими партнерами и напишите нам"} />
                <meta
                    name={"keywords"}
                    content={
                        "программа долгосрочных сбережений граждан, пдс, долгосрочные сбережения, софинансирование, вступить в программу" +
                        " долгосрочных сбережений, перевести накопления опс в пдс, перевод опс, преимущества, калькулятор," +
                        " вопросы и ответы, faq, нпф сбербанка, сбернпф"
                    }
                />
                <meta property={"og:title"} content={PAGE_TITLE[ROUTES.about]} />
                <meta property={"og:url"} content={window.location.origin + window.location.pathname} />
                <meta property={"og:description"} content={"Ознакомьтесь с нашими партнерами и напишите нам"} />
                <meta property={"og:site_name"} content={PAGE_TITLE[ROUTES.about]} />
                <meta property={"og:locale"} content={"ru_RU"} />
            </Helmet>
            <PageTitle
                title={PAGE_TITLE[ROUTES.about]}
                description={"Ознакомьтесь с нашими партнерами и напишите нам"}
            />
            <Partners />
            <Contacts />
        </>
    );
};

export default AboutPage;

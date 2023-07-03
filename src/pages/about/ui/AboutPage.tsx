import { FC } from "react";

import { ROUTES } from "@/shared/config/router/types";
import { PAGE_TITLE } from "@/shared/lib/constants";
import PageTitle from "@/shared/ui/pageTitle";
import Contacts from "@/widgets/contacts";
import Partners from "@/widgets/partners";

const AboutPage: FC = () => {
    return (
        <>
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

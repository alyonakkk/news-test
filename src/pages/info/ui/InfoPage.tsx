import { FC } from "react";
import { Helmet } from "react-helmet-async";

import { ROUTES } from "@/shared/config/router/types";
import { PAGE_TITLE } from "@/shared/lib/constants";
import Image from "@/shared/ui/image";
import PageTitle from "@/shared/ui/pageTitle";
import SectionContainer from "@/shared/ui/sectionContainer";

const InfoPage: FC = () => {
    return (
        <>
            <Helmet key={"info"}>
                <title>{PAGE_TITLE[ROUTES.info]}</title>
                <meta name={"description"} content={"Познакомьтесь поближе с нашей компанией"} />
                <meta
                    name={"keywords"}
                    content={
                        "программа долгосрочных сбережений граждан, пдс, долгосрочные сбережения, софинансирование, вступить в программу" +
                        " долгосрочных сбережений, перевести накопления опс в пдс, перевод опс, преимущества, калькулятор," +
                        " вопросы и ответы, faq, нпф сбербанка, сбернпф"
                    }
                />
                <meta property={"og:title"} content={PAGE_TITLE[ROUTES.info]} />
                <meta property={"og:url"} content={window.location.origin + window.location.pathname} />
                <meta property={"og:description"} content={"Познакомьтесь поближе с нашей компанией"} />
                <meta property={"og:site_name"} content={PAGE_TITLE[ROUTES.about]} />
                <meta property={"og:locale"} content={"ru_RU"} />
            </Helmet>
            <PageTitle title={PAGE_TITLE[ROUTES.info]} description={"Познакомьтесь поближе с нашей компанией"} />
            <SectionContainer title={"Lorem ipsum dolor sit amet"} name={"section1"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-10"}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt est hic illo ipsa labore
                        magnam odio officiis quibusdam suscipit. Asperiores blanditiis eveniet expedita fuga magnam
                        nulla possimus quisquam, tenetur.
                    </p>
                    <figure className={"w-full h-full object-contain"}>
                        <Image />
                        <figcaption className={"text-center"}>Lorem ipsum dolor sit amet</figcaption>
                    </figure>
                </div>
            </SectionContainer>
            <SectionContainer title={"Lorem ipsum dolor sit amet"} name={"section2"}>
                <div className={"grid grid-cols-1 md:grid-cols-3 gap-10"}>
                    <figure className={"w-full h-full object-contain"}>
                        <Image />
                        <figcaption className={"text-center"}>Lorem ipsum dolor sit amet</figcaption>
                    </figure>
                    <p className={"md:col-span-2"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt est hic illo ipsa labore
                        magnam odio officiis quibusdam suscipit. Asperiores blanditiis eveniet expedita fuga magnam
                        nulla possimus quisquam, tenetur.
                        <br /> <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt est hic illo ipsa labore
                        magnam odio officiis quibusdam suscipit. Asperiores blanditiis eveniet expedita fuga magnam
                        nulla possimus quisquam, tenetur.
                        <br /> <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt est hic illo ipsa labore
                        magnam odio officiis quibusdam suscipit. Asperiores blanditiis eveniet expedita fuga magnam
                        nulla possimus quisquam, tenetur.
                    </p>
                </div>
            </SectionContainer>
            <SectionContainer title={"Lorem ipsum dolor sit amet"} name={"section3"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt est hic illo ipsa labore magnam
                odio officiis quibusdam suscipit. Asperiores blanditiis eveniet expedita fuga magnam nulla possimus
                quisquam, tenetur.
            </SectionContainer>
            <SectionContainer title={"Lorem ipsum dolor sit amet"} name={"section4"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt est hic illo ipsa labore magnam
                odio officiis quibusdam suscipit. Asperiores blanditiis eveniet expedita fuga magnam nulla possimus
                quisquam, tenetur.
            </SectionContainer>
        </>
    );
};

export default InfoPage;

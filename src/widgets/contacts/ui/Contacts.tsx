import { FC } from "react";

import ContactForm from "@/features/contactForm";
import SectionContainer from "@/shared/ui/sectionContainer";

const Contacts: FC = () => {
    return (
        <SectionContainer title={"Контакты"} name={"contacts"}>
            <p className={"w-full text-center md:text-left md:w-1/2 md:max-w-[500px]"}>
                Напишите нам или позвоните и мы свяжемся с вами в течении одного рабочего дня!
            </p>
            <div className={"flex justify-between gap-20 flex-col md:flex-row"}>
                <div className={"flex flex-col gap-10 w-full md:w-1/2"}>
                    <a
                        href={"tel:89999999999"}
                        className={
                            "block text-xl md:text-3xl hover:text-primary hover:underline hover:underline-offset-8"
                        }
                    >
                        +7 999 999 99 99
                    </a>
                    <a
                        href={"mailto:hello@mail.ru"}
                        className={
                            "block text-xl md:text-3xl hover:text-primary hover:underline hover:underline-offset-8"
                        }
                    >
                        hello@mail.ru
                    </a>
                </div>
                <ContactForm />
            </div>
        </SectionContainer>
    );
};

export default Contacts;

import { FC } from "react";

import Image from "@/shared/ui/image";
import SectionContainer from "@/shared/ui/sectionContainer";

import { partnersData } from "../lib/constants";

const Partners: FC = () => {
    const partnersList = partnersData.map((partner, index) => {
        const { src, name } = partner;

        return (
            <li className={"w-[90px] h-[90px]"} key={index}>
                <Image src={src} name={name} />
            </li>
        );
    });
    return (
        <SectionContainer title={"Наши партнеры"} name={"partners"}>
            <ul className={"flex justify-center gap-5"}>{partnersList}</ul>
        </SectionContainer>
    );
};

export default Partners;

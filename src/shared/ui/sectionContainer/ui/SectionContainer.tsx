import { FC, ReactNode } from "react";

interface ISectionTitle {
    title?: string;
    name: string;
    children: ReactNode;
}

const SectionContainer: FC<ISectionTitle> = ({ title, name, children }) => {
    return (
        <section className={`${name} flex flex-col gap-7`}>
            <h2 className={"text-xl md:text-4xl font-bold"}>{title}</h2>
            {children}
        </section>
    );
};

export default SectionContainer;

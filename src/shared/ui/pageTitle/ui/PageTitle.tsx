import { FC } from "react";

interface IPageTitle {
    title: string;
    description?: string;
}

const PageTitle: FC<IPageTitle> = ({ title, description }) => {
    return (
        <section className={"title flex justify-center items-center w-full"}>
            <div
                className={
                    "p-6 flex flex-col items-center gap-2 text-center w-full md:w-1/2 max-w-[600px] bg-gray-light " +
                    "rounded-3xl"
                }
            >
                <h1 className={"text-2xl md:text-4xl font-bold text-primary"}>{title}</h1>
                {description && (
                    <p className={"text-sm md:text-lg"} dangerouslySetInnerHTML={{ __html: description }} />
                )}
            </div>
        </section>
    );
};

export default PageTitle;

import { FC, useEffect, useState } from "react";

interface IDescription {
    description: string;
}

const Description: FC<IDescription> = ({ description }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const maxLength = 310;
    const hasTextMore = description.slice(maxLength);

    useEffect(() => {
        setIsOpen(!hasTextMore);
    }, [description]);

    function toggleCollapse() {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <>
            <p>{isOpen ? description : `${description.slice(0, maxLength)}...`}</p>
            {hasTextMore && (
                <button
                    onClick={toggleCollapse}
                    className={"btn btn-primary btn-xs relative left-0 right-0 bottom-[-10px] w-max"}
                >
                    {isOpen ? "Свернуть" : "Читать больше"}
                </button>
            )}
        </>
    );
};

export default Description;

import { FC } from "react";
import { NavLink } from "react-router-dom";

import { IMenuLink } from "../../lib/types";

interface IMenuDropdown {
    menuIndex: number;
    link: Required<IMenuLink>;
}

const MenuDropdown: FC<IMenuDropdown> = ({ link, menuIndex }) => {
    const { title, children } = link;
    const menuSubList = children.map((subLink, index) => {
        const { title, href, children } = subLink;

        if (children) {
            return <MenuDropdown key={index} menuIndex={menuIndex + 1} link={subLink as Required<IMenuLink>} />;
        }

        return (
            <li key={index}>
                <NavLink to={href}>{title}</NavLink>
            </li>
        );
    });

    return (
        <details>
            <summary>{title}</summary>
            <ul className={"p-2 bg-base-100"}>{menuSubList}</ul>
        </details>
    );
};

export default MenuDropdown;

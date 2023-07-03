import { FC } from "react";
import { NavLink } from "react-router-dom";

import { IMenuLink } from "../../lib/types";

interface IMenuMobileDropdown {
    menuIndex: number;
    link: Required<IMenuLink>;
}

const MenuMobileDropdown: FC<IMenuMobileDropdown> = ({ menuIndex, link }) => {
    const { title, children } = link;
    const menuSubList = children.map((subLink, index) => {
        const { title, href, children } = subLink;

        if (children) {
            return <MenuMobileDropdown key={index} menuIndex={menuIndex + 1} link={subLink as Required<IMenuLink>} />;
        }

        return (
            <li key={index}>
                <NavLink to={href}>{title}</NavLink>
            </li>
        );
    });

    return (
        <ul>
            <p>{title}</p>
            {menuSubList}
        </ul>
    );
};

export default MenuMobileDropdown;

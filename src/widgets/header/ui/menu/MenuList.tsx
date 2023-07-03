import { FC, memo } from "react";
import { NavLink } from "react-router-dom";

import { MENU_LINKS } from "../../lib/constants";
import { IMenuLink } from "../../lib/types";
import MenuDropdown from "./MenuDropdown";

const MenuList: FC = () => {
    const menuList = MENU_LINKS.map((link, index) => {
        const { title, href, children } = link;

        if (children) {
            return (
                <li key={index}>
                    <MenuDropdown menuIndex={1} link={link as Required<IMenuLink>} />
                </li>
            );
        }

        return (
            <li key={index}>
                <NavLink to={href}>{title}</NavLink>
            </li>
        );
    });

    return (
        <nav>
            <ul className={"hidden md:block menu menu-horizontal px-1"}>{menuList}</ul>
        </nav>
    );
};

export default memo(MenuList);

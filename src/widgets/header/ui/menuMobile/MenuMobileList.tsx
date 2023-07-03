import { FC, memo } from "react";
import { NavLink } from "react-router-dom";

import MenuIcon from "@/shared/assets/icons/menu.svg";
import { MENU_LINKS } from "@/widgets/header/lib/constants";

import { IMenuLink } from "../../lib/types";
import MenuMobileDropdown from "./MenuMobileDropdown";

const MenuMobileList: FC = () => {
    const menuList = MENU_LINKS.map((link, index) => {
        const { title, href, children } = link;

        if (children) {
            return (
                <li key={index}>
                    <MenuMobileDropdown menuIndex={1} link={link as Required<IMenuLink>} />
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
        <div className={"dropdown md:hidden"}>
            <label tabIndex={0} className={"btn btn-ghost btn-circle"}>
                <MenuIcon className={"h-5 w-5"} />
            </label>
            <nav>
                <ul
                    className={
                        "menu menu-sm dropdown-content right-[0px] mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    }
                >
                    {menuList}
                </ul>
            </nav>
        </div>
    );
};

export default memo(MenuMobileList);

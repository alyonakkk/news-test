import { FC } from "react";
import { NavLink } from "react-router-dom";

import { selectIsAuth } from "@/entities/user";
import Logo from "@/shared/assets/icons/logo.svg";
import { ROUTES } from "@/shared/config/router/types";
import { useAppSelector } from "@/shared/config/store";
import ThemeSwitcher from "@/widgets/themeSwitcher";

import MenuList from "./menu/MenuList";
import MenuMobileList from "./menuMobile/MenuMobileList";
import Profile from "./Profile";

const Header: FC = () => {
    const isAuth = useAppSelector(selectIsAuth);

    return (
        <header className={"container navbar bg-base-100 sticky top-[0px] z-1000"}>
            <div className={"flex-1"}>
                <NavLink to={ROUTES.news} className={"btn btn-ghost normal-case text-xl"}>
                    <Logo className={"w-[32px] h-[32px] fill-current"} />
                    <p className={"hidden sm:block"}>nameless</p>
                </NavLink>
            </div>
            <div className={"flex items-center gap-[20px]"}>
                <MenuList />
                <div className={"flex items-center gap-[8px]"}>
                    <ThemeSwitcher />
                    {isAuth ? (
                        <Profile />
                    ) : (
                        <NavLink className={"btn btn-primary btn-sm"} to={ROUTES.login}>
                            Войти
                        </NavLink>
                    )}
                    <MenuMobileList />
                </div>
            </div>
        </header>
    );
};

export default Header;

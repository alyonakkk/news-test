import { FC } from "react";
import { NavLink } from "react-router-dom";

import Logo from "@/shared/assets/icons/logo.svg";
import { ROUTES } from "@/shared/config/router/types";

const Footer: FC = () => {
    return (
        <footer className="container footer p-10 bg-base-200 text-base-content">
            <div>
                <Logo className={"fill-current"} />
                <p>
                    Nameless
                    <br />
                    Providing since 2023
                </p>
            </div>
            <nav>
                <ul>
                    <p className={"footer-title"}>Компания</p>
                    <li>
                        <NavLink to={ROUTES.about}>О нас</NavLink>
                    </li>
                    <li>
                        <NavLink to={ROUTES.info}>Информация</NavLink>
                    </li>
                    <li>
                        <NavLink to={ROUTES.news}>Новости</NavLink>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <p className="footer-title">Правила</p>
                    <li>
                        <a className="link link-hover">Политика конфеденциальности</a>
                    </li>
                    <li>
                        <a className="link link-hover">Политика использования файлов cookie</a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;

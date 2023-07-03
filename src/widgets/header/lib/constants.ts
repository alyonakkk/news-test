import { ROUTES } from "@/shared/config/router/types";
import { IMenuLink } from "@/widgets/header/lib/types";

export const MENU_LINKS: IMenuLink[] = [
    {
        title: "Главная",
        href: "",
        children: [
            {
                title: "Новости",
                href: ROUTES.news
            },
            {
                title: "Информация",
                href: ROUTES.info
            },
            {
                title: "О нас",
                href: ROUTES.about
            }
        ]
    }
];

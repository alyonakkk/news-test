import { useContext, useEffect } from "react";

import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "@/app/providers/theme/lib/ThemeContext";
import { THEME } from "@/shared/config/theme/types";

interface IUseTheme {
    theme: THEME;
    toggleTheme: () => void;
}

const useTheme = (): IUseTheme => {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        document.querySelector("html")?.setAttribute("data-theme", theme);
    }, [theme]);

    function toggleTheme(): void {
        switch (theme) {
            case THEME.light:
                localStorage.setItem(LOCAL_STORAGE_THEME_KEY, THEME.dark);
                setTheme(THEME.dark);
                break;
            case THEME.dark:
                localStorage.setItem(LOCAL_STORAGE_THEME_KEY, THEME.light);
                setTheme(THEME.light);
                break;
            default:
                localStorage.setItem(LOCAL_STORAGE_THEME_KEY, THEME.light);
                break;
        }
    }

    return { theme, toggleTheme };
};

export default useTheme;

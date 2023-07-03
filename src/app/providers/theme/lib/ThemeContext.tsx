import { createContext } from "react";

import { THEME } from "@/shared/config/theme/types";

export const LOCAL_STORAGE_THEME_KEY = "theme";

interface IThemeContext {
    theme: THEME;
    setTheme: (theme: THEME) => void;
}

export const ThemeContext = createContext<IThemeContext>({
    setTheme: () => {},
    theme: THEME.light
});

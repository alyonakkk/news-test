import React, { FC, memo } from "react";

import MoonIcon from "@/shared/assets/icons/moon.svg";
import SunIcon from "@/shared/assets/icons/sun.svg";
import { THEME } from "@/shared/config/theme/types";
import useTheme from "@/shared/config/theme/useTheme";

const ThemeSwitcher: FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <label className="swap swap-rotate">
            <input checked={theme === THEME.dark} type="checkbox" onChange={toggleTheme} />
            <SunIcon className="swap-on fill-current w-[32px] h-[32px]" />
            <MoonIcon className="swap-off fill-current w-[32px] h-[32px]" />
        </label>
    );
};

export default memo(ThemeSwitcher);

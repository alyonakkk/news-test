import { FC } from "react";
import { NavLink } from "react-router-dom";

import { fetchLogout, selectUserData } from "@/entities/user";
import { ROUTES } from "@/shared/config/router/types";
import { useAppDispatch, useAppSelector } from "@/shared/config/store";
import { getInitials } from "@/shared/lib/helpers";

const Profile: FC = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUserData);
    const initials = getInitials(`${user.name} ${user.surname}`);

    function handleLogout() {
        dispatch(fetchLogout());
    }

    return (
        <div className={"dropdown dropdown-end"}>
            <label tabIndex={0} className={"btn btn-ghost btn-circle avatar"}>
                <div className={"avatar placeholder"}>
                    <div className={"bg-primary-focus text-neutral-content rounded-full w-10"}>
                        {initials && <span>{initials}</span>}
                    </div>
                </div>
            </label>
            <ul
                tabIndex={0}
                className={"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"}
            >
                <li>
                    <NavLink to={ROUTES.profile}>Профиль</NavLink>
                </li>
                <li>
                    <button onClick={handleLogout}>Выйти</button>
                </li>
            </ul>
        </div>
    );
};

export default Profile;

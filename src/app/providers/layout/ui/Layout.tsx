import Cookies from "js-cookie";
import { FC, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { NotificationsList } from "@/entities/notification";
import { fetchUser, setAuth } from "@/entities/user";
import { useAppDispatch } from "@/shared/config/store";
import { TOKEN_NAME } from "@/shared/lib/constants";
import Footer from "@/widgets/footer";
import Header from "@/widgets/header";

const Layout: FC = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();

    useEffect(() => {
        const token = Cookies.get(TOKEN_NAME);

        if (token) {
            dispatch(setAuth(true));
        } else {
            dispatch(setAuth(false));
        }

        dispatch(fetchUser());
    }, [location.pathname]);

    return (
        <>
            <Header />
            <main
                className={
                    "container container-p mt-[50px] mb-[80px] min-h-[calc(100vh-290px)] flex flex-col gap-[80px]"
                }
            >
                <Outlet />
            </main>
            <Footer />
            <NotificationsList />
        </>
    );
};

export default Layout;

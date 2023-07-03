import { FC } from "react";

import ProfileForm from "@/features/profileForm";
import { ROUTES } from "@/shared/config/router/types";
import { PAGE_TITLE } from "@/shared/lib/constants";
import PageTitle from "@/shared/ui/pageTitle";

const ProfilePage: FC = () => {
    return (
        <>
            <PageTitle title={PAGE_TITLE[ROUTES.profile]} description={"Настройки личного кабинета"} />
            <div className={"m-auto w-full md:w-1/2"}>
                <ProfileForm />
            </div>
        </>
    );
};

export default ProfilePage;

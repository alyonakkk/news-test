import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import Layout from "@/app/providers/layout";
import { PrivateRoute, PublicOnlyRoute } from "@/app/providers/router";
import LoginPage from "@/pages/login";
import { ROUTES } from "@/shared/config/router/types";

const AboutPage = lazy(() => import("@/pages/about"));
const InfoPage = lazy(() => import("@/pages/info"));
const NewsPage = lazy(() => import("@/pages/news"));
const ProfilePage = lazy(() => import("@/pages/profile"));
const NotFoundPage = lazy(() => import("@/pages/notFound"));

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Navigate to={ROUTES.news} replace />
                },
                {
                    path: ROUTES.about,
                    element: <AboutPage />
                },
                {
                    path: ROUTES.news,
                    element: <NewsPage />
                },
                {
                    path: ROUTES.info,
                    element: <InfoPage />
                },
                {
                    path: ROUTES.profile,
                    element: (
                        <PrivateRoute>
                            <ProfilePage />
                        </PrivateRoute>
                    )
                },
                {
                    path: ROUTES.login,
                    element: (
                        <PublicOnlyRoute>
                            <LoginPage />
                        </PublicOnlyRoute>
                    )
                },
                {
                    path: "*",
                    element: <NotFoundPage />
                }
            ]
        }
    ],
    { basename: "/" }
);

export default router;

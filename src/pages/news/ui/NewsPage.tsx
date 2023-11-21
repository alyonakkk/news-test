import { FC, useEffect } from "react";
import { Helmet } from "react-helmet";

import { fetchCategories, fetchFilters, fetchPosts } from "@/entities/post";
import PostsFilter from "@/features/postsFilter";
import CreatePost from "@/pages/news/ui/CreatePost";
import { ROUTES } from "@/shared/config/router/types";
import { useAppDispatch } from "@/shared/config/store";
import { PAGE_TITLE } from "@/shared/lib/constants";
import PageTitle from "@/shared/ui/pageTitle";
import SectionContainer from "@/shared/ui/sectionContainer";
import PostsList from "@/widgets/postsList";

const NewsPage: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchFilters());
        dispatch(fetchCategories());
        dispatch(fetchPosts());
    }, []);

    return (
        <>
            <Helmet key={"news"} htmlAttributes={{ lang: "ru" }}>
                <title data-react-helmet="true">{PAGE_TITLE[ROUTES.news]}</title>
                <meta charSet="UTF-8" data-react-helmet="true" />
                <meta
                    name="viewport"
                    data-react-helmet="true"
                    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
                />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" data-react-helmet="true" />
                <link rel="icon" href="favicon.ico" data-react-helmet="true" />
                <meta
                    data-react-helmet="true"
                    name={"description"}
                    content={"Узнайте все о криптовалюте, NFT и блокчейнах."}
                />
                <meta
                    data-react-helmet="true"
                    name={"keywords"}
                    content={
                        "программа долгосрочных сбережений граждан, пдс, долгосрочные сбережения, софинансирование, вступить в программу" +
                        " долгосрочных сбережений, перевести накопления опс в пдс, перевод опс, преимущества, калькулятор," +
                        " вопросы и ответы, faq, нпф сбербанка, сбернпф"
                    }
                />
                <meta data-react-helmet="true" property={"og:title"} content={PAGE_TITLE[ROUTES.news]} />
                <meta
                    data-react-helmet="true"
                    property={"og:url"}
                    content={window.location.origin + window.location.pathname}
                />
                <meta
                    data-react-helmet="true"
                    property={"og:description"}
                    content={"Узнайте все о криптовалюте, NFT и блокчейнах."}
                />
                <meta data-react-helmet="true" property={"og:site_name"} content={PAGE_TITLE[ROUTES.news]} />
                <meta data-react-helmet="true" property={"og:locale"} content={"ru_RU"} />
            </Helmet>
            <PageTitle
                title={PAGE_TITLE[ROUTES.news]}
                description={
                    "<p>Узнайте все о криптовалюте, NFT и блокчейнах. <br> " +
                    "Изучите наши последние обновления и истории пользователей" +
                    "</p>"
                }
            />
            <SectionContainer name={"news"}>
                <div className={"flex flex-col gap-10"}>
                    <PostsFilter />
                    <CreatePost />
                </div>
                <PostsList />
            </SectionContainer>
        </>
    );
};

export default NewsPage;

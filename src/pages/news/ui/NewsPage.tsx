import { FC, useEffect } from "react";

import { fetchCategories, fetchFilters, fetchPosts } from "@/entities/post";
import PostsFilter from "@/features/postsFilter";
import CreatePost from "@/pages/news/ui/CreatePost";
import { ROUTES } from "@/shared/config/router/types";
import { useAppDispatch } from "@/shared/config/store";
import { PAGE_TITLE } from "@/shared/lib/constants";
import PageTitle from "@/shared/ui/pageTitle";
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
            <PageTitle
                title={PAGE_TITLE[ROUTES.news]}
                description={
                    "<p>Узнайте все о криптовалюте, NFT и блокчейнах. <br> " +
                    "Изучите наши последние обновления и истории пользователей" +
                    "</p>"
                }
            />
            <div className={"flex flex-col gap-10"}>
                <PostsFilter />
                <CreatePost />
            </div>
            <PostsList />
        </>
    );
};

export default NewsPage;

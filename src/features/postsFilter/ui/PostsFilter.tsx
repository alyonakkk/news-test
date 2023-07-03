import { FC, useCallback } from "react";

import { selectActiveFilter, selectFiltersData, selectFiltersStatus, setFilter, TPostsFilter } from "@/entities/post";
import { REQUEST_STATUS } from "@/shared/api/types";
import { useAppDispatch, useAppSelector } from "@/shared/config/store";
import { Loader } from "@/shared/ui/loader";

import FilterItem from "./FilterItem";

const PostsFilter: FC = () => {
    const dispatch = useAppDispatch();
    const filters = useAppSelector(selectFiltersData);
    const activeFilter = useAppSelector(selectActiveFilter);
    const status = useAppSelector(selectFiltersStatus);
    const onChangeFilter = useCallback((value: TPostsFilter) => {
        dispatch(setFilter(value));
    }, []);
    const filtersList = filters.map((filter) => {
        const isActive = filter.value === activeFilter;

        return (
            <li key={filter.id}>
                <FilterItem filter={filter} isActive={isActive} onChange={onChangeFilter} />
            </li>
        );
    });

    return (
        <>
            {status === REQUEST_STATUS.PENDING ? (
                <Loader />
            ) : (
                <ul className={"flex flex-wrap justify-center gap-[8px]"}>{filtersList}</ul>
            )}
        </>
    );
};

export default PostsFilter;

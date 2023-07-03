import { FC, memo } from "react";

import { IPostFilter, TPostsFilter } from "@/entities/post";

interface IFilterItem {
    filter: IPostFilter;
    isActive: boolean;
    onChange: (value: TPostsFilter) => void;
}

const FilterItem: FC<IFilterItem> = ({ filter, isActive, onChange }) => {
    function handleFilter() {
        onChange(filter.value);
    }

    return (
        <button className={`btn btn-sm ${isActive ? "btn-primary" : ""}`} onClick={handleFilter}>
            {filter.title}
        </button>
    );
};

export default memo(FilterItem);

import { useState } from "react";
import { MdFilterList } from "react-icons/md";
import { useFilterStore } from "../store";
import Filter from "./Filter";

const SearchbarFilter = () => {
  const [toggleFilter, setToggleFilter] =
    useState<boolean>(false);

  const filter_by_search = useFilterStore(
    (store) => store.filter_by_search
  );
  const filterBySearch = useFilterStore(
    (store) => store.filterBySearch
  );

  return (
    <div className="relative flex h-14 w-full items-center rounded-md border border-gray-600 bg-light-foreground">
      <div className="h-full w-11/12 border-r border-gray-600">
        <input
          className="h-full w-full border-none bg-transparent p-4 outline-none"
          type="text"
          placeholder="Search Notes"
          onChange={(
            e: React.ChangeEvent<HTMLInputElement>
          ) => {
            filterBySearch(e.target.value);
          }}
          value={filter_by_search}
        />
      </div>
      <div
        className="flex w-1/12 items-center justify-center bg-light-foreground hover:cursor-pointer"
        onClick={() => {
          setToggleFilter((prev) => !prev);
        }}
      >
        <MdFilterList size={25} />
      </div>
      {toggleFilter && <Filter />}
    </div>
  );
};

export default SearchbarFilter;

import { useState } from "react";
import { MdFilterList } from "react-icons/md";
import Filter from "./Filter";

const SearchbarFilter = () => {
  const [toggleFilter, setToggleFilter] =
    useState<boolean>(false);

  return (
    <div className="relative flex h-14 w-full items-center rounded-md border border-gray-600 bg-light-foreground">
      <div className="h-full w-11/12 border-r border-gray-600">
        <input
          className="h-full w-full border-none bg-transparent p-4 outline-none"
          type="text"
          placeholder="Search Notes"
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

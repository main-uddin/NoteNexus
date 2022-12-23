import { MdFilterList } from "react-icons/md";

const SearchbarFilter = () => {
  return (
    <div className="flex h-14 w-full items-center rounded-md border border-gray-600">
      <div className="h-full w-11/12 border-r border-gray-600">
        <input
          className="h-full w-full border-none bg-transparent p-4 outline-none"
          type="text"
          placeholder="Search Notes"
        />
      </div>
      <div className="flex w-1/12 items-center justify-center bg-light-foreground hover:cursor-pointer">
        <MdFilterList size={25} />
      </div>
    </div>
  );
};

export default SearchbarFilter;

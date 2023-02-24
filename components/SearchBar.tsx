import { MdOutlineFilterAlt } from "react-icons/md";
import { useFilterStore } from "../store";

const SearchBar = () => {
  const filter_by_search = useFilterStore(
    (store) => store.filter_by_search
  );

  const filterBySearch = useFilterStore(
    (store) => store.filterBySearch
  );

  console.log(filter_by_search);

  return (
    <div className="flex items-center justify-center gap-5">
      <div className="h-12 w-1/2 border border-gray-600">
        <input
          className="h-full w-full px-3"
          type="text"
          placeholder="Search Notes"
        />
      </div>
      <span className="rounded-md border border-gray-300 bg-gray-100 p-1 hover:cursor-pointer hover:bg-gray-200">
        <MdOutlineFilterAlt size={30} />
      </span>
    </div>
  );
};

export default SearchBar;

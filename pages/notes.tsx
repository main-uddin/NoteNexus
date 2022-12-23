import {
  MdFilter,
  MdFilterList,
  MdOutlineFilterAlt,
} from "react-icons/md";
import {
  SearchbarFilter,
  Sidebar,
  SidebarLayout,
} from "../components";
import SearchBar from "../components/SearchBar";

const NotesPage = (): React.ReactElement => {
  return (
    <div className="mx-auto mt-20 w-2/5">
      <SearchbarFilter />
    </div>
  );
};

export default NotesPage;

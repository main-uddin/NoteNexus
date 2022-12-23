import {
  MdFilter,
  MdFilterList,
  MdOutlineFilterAlt,
  MdOutlinePushPin,
} from "react-icons/md";
import {
  SearchbarFilter,
  Sidebar,
  SidebarLayout,
} from "../components";
import NotesCard from "../components/NotesCard";
import SearchBar from "../components/SearchBar";

const NotesPage = (): React.ReactElement => {
  return (
    <div className="mx-auto mt-20 space-y-5 md:w-4/5 lg:w-2/5">
      <SearchbarFilter />
      <div className="space-y-4">
        <h1 className="text-center font-semibold">
          Pinned Notes
        </h1>
        <div className="space-y-5">
          <NotesCard />
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-center font-semibold">
          Others Notes
        </h1>
        <div className="space-y-5"></div>
      </div>
    </div>
  );
};

export default NotesPage;

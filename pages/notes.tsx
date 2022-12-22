import { MdOutlineFilterAlt } from "react-icons/md";
import {
  Sidebar,
  SidebarLayout,
} from "../components";
import SearchBar from "../components/SearchBar";

const NotesPage = (): React.ReactElement => {
  return (
    <SidebarLayout>
      <div className="mt-8 space-y-5">
        <SearchBar />
        <div className="flex items-center justify-center">
          <h1>Pinned Notes</h1>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default NotesPage;

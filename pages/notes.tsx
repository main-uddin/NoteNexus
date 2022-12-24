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
import { notesData } from "../data";
import { useFilterStore } from "../store";
import { Note } from "../types";

const NotesPage = (): React.ReactElement => {
  const {
    filter_by_priority,
    sort_by_time,
    filter_by_label,
  } = useFilterStore((store) => store);

  const filterByPrority = (notesData: Note[]) => {
    if (filter_by_priority === "High") {
      return notesData.filter(
        (x) => x.priority === "High"
      );
    } else if (filter_by_priority === "Low") {
      return notesData.filter(
        (x) => x.priority === "Low"
      );
    } else if (filter_by_priority === "Medium") {
      return notesData.filter(
        (x) => x.priority === "Medium"
      );
    } else {
      return notesData;
    }
  };

  const sortByTime = (
    sortByTime: string,
    notesData: Note[]
  ) => {
    if (sortByTime == "New To Old") {
      return notesData.sort(
        (a, b) => b.createdAt - a.createdAt
      );
    } else {
      return notesData.sort(
        (a, b) => a.createdAt - b.createdAt
      );
    }
  };

  const filterByLabel = (
    filter_by_label: string[],
    noteData: Note[]
  ) => {
    if (filter_by_label.length) {
      return noteData.filter((x) =>
        filter_by_label.includes(x.label)
      );
    } else {
      return noteData;
    }
  };

  return (
    <div className="mx-auto mt-20 space-y-5 md:w-4/5 lg:w-2/5">
      <SearchbarFilter />
      <div className="space-y-4">
        <h1 className="text-center font-semibold">
          Pinned Notes
        </h1>
        <div className="space-y-5"></div>
      </div>
      <div className="space-y-4">
        <h1 className="text-center font-semibold">
          Others Notes
        </h1>
        <div className="space-y-5">
          {filterByLabel(
            filter_by_label,
            sortByTime(
              sort_by_time,
              filterByPrority(notesData)
            )
          ).map((x) => (
            <NotesCard key={x.id} noteData={x} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotesPage;

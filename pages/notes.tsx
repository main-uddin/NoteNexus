import {
  CreateNoteCard,
  SearchbarFilter,
} from "../components";
import NotesCard from "../components/NotesCard";
import { notesData } from "../data";
import { useGetDoc } from "../hooks";
import {
  useFilterStore,
  useToggleNoteStore,
} from "../store";
import { Note } from "../types";

const NotesPage = (): React.ReactElement => {
  const { openCreateNoteModal } =
    useToggleNoteStore((store) => store);

  const {
    data: userData,
    isLoading: isUserDataLoading,
    isError: isUserDataError,
  } = useGetDoc("users");

  const {
    filter_by_priority,
    sort_by_time,
    filter_by_label,
    filter_by_search,
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

  const filterBySearchKey = (
    filter_by_search: string,
    notesData: Note[]
  ) => {
    return notesData.filter(
      (x) =>
        x.note
          .toLowerCase()
          .includes(filter_by_search) ||
        x.title
          .toLowerCase()
          .includes(filter_by_search)
    );
  };

  if (isUserDataLoading)
    return <h1>loading...</h1>;

  return (
    <div className="mx-auto mt-20 md:w-4/5 lg:w-2/5">
      <SearchbarFilter />
      <div className="mt-5 space-y-5">
        <h1 className="text-center font-semibold">
          Pinned Notes
        </h1>
        <div className="space-y-5">
          {/* {notesData
            .filter((x) => x.pinned)
            .map((x) => (
              <NotesCard
                key={x.id}
                noteData={x}
              />
            ))} */}
        </div>
      </div>
      <div className="mt-5 space-y-4">
        <h1 className="text-center font-semibold">
          Others Notes
        </h1>
        <div className="space-y-5">
          {filterBySearchKey(
            filter_by_search,
            filterByLabel(
              filter_by_label,
              sortByTime(
                sort_by_time,
                filterByPrority(userData.notes)
              )
            )
          ).map((x) => (
            <NotesCard key={x.id} noteData={x} />
          ))}
        </div>
      </div>
      {openCreateNoteModal && <CreateNoteCard />}
    </div>
  );
};

export default NotesPage;

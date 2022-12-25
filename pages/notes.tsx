import {
  CreateNoteCard,
  SearchbarFilter,
  NotesCard,
} from "../components";
import { useGetDoc } from "../hooks";
import {
  useFilterStore,
  useToggleNoteStore,
} from "../store";
import {
  filterByLabel,
  filterByPrority,
  filterBySearchKey,
  sortByTime,
} from "../utility";

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

  if (isUserDataLoading)
    return <h1>loading...</h1>;

  return (
    <div className="mx-auto mt-20 md:w-4/5 lg:w-2/5">
      <SearchbarFilter />
      <div className="mt-5 space-y-5">
        <h1 className="text-center font-semibold">
          Pinned Notes
        </h1>
        <div className="space-y-5"></div>
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
                filterByPrority(
                  filter_by_priority,
                  userData.notes
                )
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

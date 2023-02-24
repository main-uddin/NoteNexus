import { Note } from "../types";

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

export default filterBySearchKey;

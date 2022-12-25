import { Note } from "../types";

const filterByPrority = (
  filter_by_priority: string,
  notesData: Note[]
) => {
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

export default filterByPrority;

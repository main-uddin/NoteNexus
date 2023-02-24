import { Note } from "../types";

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

export default filterByLabel;

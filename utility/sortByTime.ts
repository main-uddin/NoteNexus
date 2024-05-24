import { Note } from "../types";

const sortByTime = (
  sort_by_time: string,
  notesData: Note[]
) => {
  if (sort_by_time == "New To Old") {
    return notesData?.sort(
      (a, b) => b.createdAt - a.createdAt
    );
  } else {
    return notesData?.sort(
      (a, b) => a.createdAt - b.createdAt
    );
  }
};

export default sortByTime;

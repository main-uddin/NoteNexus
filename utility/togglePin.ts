import { Note } from "../types";

const togglePin = (
  notesData: Note,
  userNotesData: Note[]
) => {
  return userNotesData?.map((x) => {
    if (x.id === notesData.id) {
      return {
        ...x,
        pinned: !x.pinned,
      };
    } else {
      return x;
    }
  });
};

export default togglePin;

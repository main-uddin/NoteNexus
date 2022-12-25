import { Note } from "../types";

const toggleTrash = (
  notesData: Note,
  userNotesData: Note[]
) => {
  return userNotesData?.map((x) => {
    if (x.id === notesData.id) {
      return {
        ...x,
        trash: !x.trash,
      };
    } else {
      return x;
    }
  });
};

export default toggleTrash;

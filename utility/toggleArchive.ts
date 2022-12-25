import { Note } from "../types";

const toggleArchive = (
  notesData: Note,
  userNotesData: Note[]
) => {
  return userNotesData.map((x) => {
    if (x.id === notesData.id) {
      return {
        ...x,
        archive: !x.archive,
      };
    } else {
      return x;
    }
  });
};

export default toggleArchive;

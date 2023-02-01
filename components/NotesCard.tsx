import {
  MdColorLens,
  MdOutlinePushPin,
  MdOutlineLabel,
  MdArchive,
  MdDelete,
  MdPushPin,
  MdEdit,
  MdUnarchive,
  MdRestoreFromTrash,
  MdLabelOutline,
  MdLabel,
  MdEqualizer,
} from "react-icons/md";
import { useState } from "react";
import ColorPallete from "./ColorPallete";
import TagInput from "./LabelInput";
import { Note } from "../types";
import { useUpdateDoc } from "../hooks";
import {
  toggleArchive,
  togglePin,
  toggleTrash,
} from "../utility";
import UpdateColorPallete from "./UpdateColorPallete";
import UpdateNoteCard from "./UpdateNoteCard";
import { toast } from "react-hot-toast";

const NotesCard = ({
  noteData,
  userNotesData,
}: {
  noteData: Note;
  userNotesData: Note[];
}) => {
  const [toggleColor, setToggleColor] =
    useState<boolean>(false);

  const [toggleTagInput, setToggleTagInput] =
    useState<boolean>(false);

  const [toggleUpdateNoteCard, setToggleUpdateNoteCard] =
    useState<boolean>(false);

  const toggleUpdateNoteCardFunc = () => {
    setToggleUpdateNoteCard((prev) => !prev);
  };

  const { mutate: addRemovePin } = useUpdateDoc("users");

  const { mutate: addRemoveArchive } =
    useUpdateDoc("users");

  const { mutate: addRemoveTrash } = useUpdateDoc("users");

  return (
    <div
      className={`relative h-fit rounded-md border border-gray-400 ${noteData.color} p-3 pb-14 shadow-sm`}
    >
      {noteData.trash ||
      noteData.archive ? null : noteData.pinned ? (
        <span
          className="absolute top-3 right-3 hover:cursor-pointer"
          onClick={() => {
            addRemovePin({
              notes: togglePin(noteData, userNotesData),
            });
            toast.success("removed from pinned notes");
          }}
        >
          <MdPushPin size={25} />
        </span>
      ) : (
        <span
          className="absolute top-3 right-3 hover:cursor-pointer"
          onClick={() => {
            addRemovePin({
              notes: togglePin(noteData, userNotesData),
            });
            toast.success("added to pinned notes");
          }}
        >
          <MdOutlinePushPin size={25} />
        </span>
      )}
      <div className="space-y-5">
        <h1 className="text-xl font-semibold">
          {noteData.title}
        </h1>
        <p className="font-normal">{noteData.note}</p>

        <div className="flex gap-3">
          <span className="flex items-center gap-1 rounded-md border border-gray-400 bg-light-background px-2 text-sm font-medium">
            <MdLabelOutline />{" "}
            {noteData.label ? noteData.label : "no label"}
          </span>
          <span className="flex items-center gap-1 rounded-md border border-gray-400 bg-light-background p-1 px-2 text-sm font-medium">
            <MdEqualizer /> {noteData.priority}
          </span>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 flex h-10 items-center justify-between border-t border-gray-300 px-3">
        <div className="">
          <span className="text-sm font-medium">
            {new Date(noteData.createdAt).toDateString()}
          </span>
        </div>
        <div className="flex gap-4">
          {noteData.trash || noteData.archive ? null : (
            <span
              className="rounded-md p-1 hover:cursor-pointer hover:bg-light-background"
              onClick={toggleUpdateNoteCardFunc}
            >
              <MdEdit size={25} />
            </span>
          )}
          {noteData.trash || noteData.archive ? null : (
            <span
              className="rounded-md p-1 hover:cursor-pointer hover:bg-light-background"
              onClick={() => {
                setToggleColor((prev) => !prev);
              }}
            >
              <MdColorLens size={25} />
              {toggleColor && (
                <UpdateColorPallete
                  noteData={noteData}
                  userNotesData={userNotesData}
                />
              )}
            </span>
          )}
          {noteData.trash ? null : noteData.archive ? (
            <span
              className="rounded-md p-1 hover:cursor-pointer hover:bg-light-background"
              onClick={() => {
                addRemoveArchive({
                  notes: toggleArchive(
                    noteData,
                    userNotesData
                  ),
                });
                toast.success("note moved to notes");
              }}
            >
              <MdUnarchive size={25} />
            </span>
          ) : (
            <span
              className="rounded-md p-1 hover:cursor-pointer hover:bg-light-background"
              onClick={() => {
                addRemoveArchive({
                  notes: toggleArchive(
                    noteData,
                    userNotesData
                  ),
                });
                toast.success("note moved to archived");
              }}
            >
              <MdArchive size={25} />
            </span>
          )}
          {noteData.archive ? null : noteData.trash ? (
            <span
              className="rounded-md p-1 hover:cursor-pointer hover:bg-light-background"
              onClick={() => {
                addRemoveTrash({
                  notes: toggleTrash(
                    noteData,
                    userNotesData
                  ),
                });
                toast.success("note restored");
              }}
            >
              <MdRestoreFromTrash size={25} />
            </span>
          ) : (
            <span
              className="rounded-md p-1 hover:cursor-pointer hover:bg-light-background"
              onClick={() => {
                addRemoveTrash({
                  notes: toggleTrash(
                    noteData,
                    userNotesData
                  ),
                });
                toast.success("note moved to trash");
              }}
            >
              <MdDelete size={25} />
            </span>
          )}
        </div>
      </div>
      {toggleUpdateNoteCard && (
        <UpdateNoteCard
          notesData={noteData}
          userNoteData={userNotesData}
          closeUpdateNoteCard={toggleUpdateNoteCardFunc}
        />
      )}
    </div>
  );
};

export default NotesCard;

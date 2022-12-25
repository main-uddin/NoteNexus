import {
  MdColorLens,
  MdOutlinePushPin,
  MdOutlineLabel,
  MdArchive,
  MdDelete,
  MdPushPin,
  MdEdit,
  MdLabel,
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

  const { mutate: addRemovePin } =
    useUpdateDoc("users");

  const { mutate: addRemoveArchive } =
    useUpdateDoc("users");

  const { mutate: addRemoveTrash } =
    useUpdateDoc("users");

  return (
    <div className="relative h-fit space-y-1 rounded-md border border-gray-400 bg-light-foreground p-3 pb-14 shadow-sm">
      {noteData.pinned ? (
        <span
          className="absolute top-3 right-3 hover:cursor-pointer"
          onClick={() => {
            addRemovePin({
              notes: togglePin(
                noteData,
                userNotesData
              ),
            });
          }}
        >
          <MdPushPin size={25} />
        </span>
      ) : (
        <span
          className="absolute top-3 right-3 hover:cursor-pointer"
          onClick={() => {
            addRemovePin({
              notes: togglePin(
                noteData,
                userNotesData
              ),
            });
          }}
        >
          <MdOutlinePushPin size={25} />
        </span>
      )}
      <div className="space-y-5">
        <h1 className="text-xl font-semibold">
          {noteData.title}
        </h1>
        <p className="font-normal">
          {noteData.note}
        </p>

        <div className="flex gap-3">
          {
            <span className="flex items-center gap-1 rounded-md border border-gray-400 bg-light-background px-3 text-sm font-medium">
              {noteData.label
                ? noteData.label
                : "no label"}
            </span>
          }
          <span className="rounded-md border border-gray-400 bg-light-background p-1 px-2 text-sm font-medium">
            {noteData.priority}
          </span>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 flex h-10 items-center justify-between border-t border-gray-300 px-3">
        <div className="">
          <span className="text-sm font-medium">
            {new Date(
              noteData.createdAt
            ).toDateString()}
          </span>
        </div>
        <div className="flex gap-4">
          <span className="rounded-md p-1 hover:cursor-pointer hover:bg-light-background">
            <MdEdit size={25} />
          </span>
          <span
            className="rounded-md p-1 hover:cursor-pointer hover:bg-light-background"
            onClick={() => {
              setToggleColor((prev) => !prev);
            }}
          >
            <MdColorLens size={25} />
            {/* {toggleColor && <ColorPallete />} */}
          </span>
          {noteData.archive ? (
            <span
              className="rounded-md p-1 hover:cursor-pointer hover:bg-light-background"
              onClick={() => {
                addRemoveArchive({
                  notes: toggleArchive(
                    noteData,
                    userNotesData
                  ),
                });
              }}
            >
              <MdArchive size={25} />
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
              }}
            >
              <MdArchive size={25} />
            </span>
          )}
          {noteData.trash ? (
            <span
              className="rounded-md p-1 hover:cursor-pointer hover:bg-light-background"
              onClick={() => {
                addRemoveTrash({
                  notes: toggleTrash(
                    noteData,
                    userNotesData
                  ),
                });
              }}
            >
              <MdDelete size={25} />
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
              }}
            >
              <MdDelete size={25} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesCard;

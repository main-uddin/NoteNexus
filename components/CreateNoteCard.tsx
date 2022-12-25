import { arrayUnion } from "firebase/firestore";
import { useState } from "react";
import {
  MdColorLens,
  MdPushPin,
  MdLabel,
  MdOutlinePushPin,
} from "react-icons/md";
import { useUpdateDoc } from "../hooks";
import { useToggleNoteStore } from "../store";
import { Note } from "../types";
import ColorPallete from "./ColorPallete";
import LabelInput from "./LabelInput";

const CreateNoteCard = () => {
  const { closeCreateNote } = useToggleNoteStore(
    (store) => store
  );

  const {
    mutate: addNote,
    isLoading,
    isError,
  } = useUpdateDoc("users");

  const [noteData, setNoteData] = useState<Note>({
    id: Date.now().toString(),
    title: "",
    note: "",
    pinned: false,
    archive: false,
    color: "",
    createdAt: Date.now(),
    label: "",
    priority: "Low",
    trash: false,
  });

  const inputHandler = (
    e: React.BaseSyntheticEvent
  ) => {
    const { name, value } = e.target;
    setNoteData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const labelHandler = (label: string) => {
    setNoteData((prev) => ({
      ...prev,
      label: prev.label,
    }));
  };

  const colorPalleteHandler = (
    colorCode: string
  ) => {
    setNoteData((prev) => ({
      ...prev,
      color: colorCode,
    }));
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-40 flex items-center justify-center bg-black/50">
      <div className="relative mx-auto h-64 w-2/5 rounded-md border border-gray-600 bg-light-foreground">
        <div className="flex h-14 w-full gap-5">
          <div className="h-full w-11/12 border-b">
            <input
              type="text"
              className="h-full w-full border-none bg-transparent p-5 text-xl outline-none"
              placeholder="Title"
              name="title"
              value={noteData.title}
              onChange={inputHandler}
            />
          </div>
          {noteData.pinned ? (
            <div
              className="flex h-full w-1/12 items-center justify-center"
              onClick={() => {
                setNoteData((prev) => ({
                  ...prev,
                  pinned: !prev.pinned,
                }));
              }}
            >
              <MdPushPin size={25} />
            </div>
          ) : (
            <div
              className="flex h-full w-1/12 items-center justify-center"
              onClick={() => {
                setNoteData((prev) => ({
                  ...prev,
                  pinned: !prev.pinned,
                }));
              }}
            >
              <MdOutlinePushPin size={25} />
            </div>
          )}
        </div>
        <div className="h-24 border-b">
          <textarea
            className="h-full w-full resize-none border-none bg-transparent p-3 outline-none"
            placeholder="Write your note here"
            name="note"
            value={noteData.note}
            onChange={inputHandler}
          ></textarea>
        </div>
        <div className="mt-3 px-2">
          {noteData.label && (
            <span className="border border-gray-600 px-2 py-1">
              Label
            </span>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex h-14 w-full justify-between border-t border-gray-600 px-2">
          <div className="flex items-center gap-5">
            <span className="hover:cursor-pointer">
              <MdColorLens size={25} />
              {false && (
                <ColorPallete
                  colorPalleteHandler={
                    colorPalleteHandler
                  }
                />
              )}
            </span>
            <span className="hover:cursor-pointer">
              <MdLabel size={25} />
              {false && (
                <LabelInput
                  labelChangeHandler={
                    labelHandler
                  }
                />
              )}
            </span>
            <span>
              <select
                className="border border-gray-600 p-1"
                name="priority"
                id=""
                onChange={inputHandler}
              >
                <option>Choose Priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              className="rounded-md border border-gray-600 p-1 px-2"
              onClick={() => {
                addNote({
                  notes: arrayUnion(noteData),
                });
              }}
            >
              ADD NOTE
            </button>
            <button
              className="rounded-md border border-gray-600 p-1 px-2"
              onClick={closeCreateNote}
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNoteCard;

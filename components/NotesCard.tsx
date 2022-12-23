import {
  MdColorLens,
  MdOutlinePushPin,
  MdOutlineLabel,
  MdArchive,
  MdDelete,
  MdPushPin,
  MdEdit,
} from "react-icons/md";
import { useState } from "react";
import ColorPallete from "./ColorPallete";
import TagInput from "./TagInput";

const NotesCard = () => {
  const [togglePin, setTogglePin] =
    useState<boolean>(false);

  const [toggleColor, setToggleColor] =
    useState<boolean>(false);

  const [toggleTagInput, setToggleTagInput] =
    useState<boolean>(false);

  return (
    <div className="relative h-fit space-y-1 rounded-md border border-gray-400 bg-light-foreground p-3 pb-14 shadow-sm">
      {togglePin ? (
        <span
          className="absolute top-3 right-3 hover:cursor-pointer"
          onClick={() =>
            setTogglePin((prev) => !prev)
          }
        >
          <MdPushPin size={25} />
        </span>
      ) : (
        <span
          className="absolute top-3 right-3 hover:cursor-pointer"
          onClick={() =>
            setTogglePin((prev) => !prev)
          }
        >
          <MdOutlinePushPin size={25} />
        </span>
      )}
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold">
          Note Title
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perspiciatis,
          blanditiis!
        </p>

        <div className="flex gap-3">
          <span className="rounded-md border border-gray-400 bg-light-background p-1 px-2 text-sm">
            LABEL
          </span>
          <span className="rounded-md border border-gray-400 bg-light-background p-1 px-2 text-sm">
            PRIORITY
          </span>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 flex h-10 items-center justify-between border-t border-gray-300 px-3">
        <div className="">
          <span className="font-semibold">
            Created At: 21/22/5
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
            {toggleColor && <ColorPallete />}
          </span>
          <span
            className="relative rounded-md p-1 hover:cursor-pointer hover:bg-light-background"
            onClick={() => {
              setToggleTagInput((prev) => !prev);
            }}
          >
            <MdOutlineLabel size={25} />
            {toggleTagInput && <TagInput />}
          </span>
          <span className="rounded-md p-1 hover:cursor-pointer hover:bg-light-background">
            <MdArchive size={25} />
          </span>
          <span className="rounded-md p-1 hover:cursor-pointer hover:bg-light-background">
            <MdDelete size={25} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;

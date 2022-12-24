import {
  MdColorLens,
  MdPushPin,
  MdLabel,
} from "react-icons/md";
import { useToggleNoteStore } from "../store";

const CreateNoteCard = () => {
  const { closeCreateNote } = useToggleNoteStore(
    (store) => store
  );

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-40 flex items-center justify-center bg-black/50">
      <div className="relative mx-auto h-64 w-2/5 rounded-md border border-gray-600 bg-light-foreground">
        <div className="flex h-14 w-full gap-5">
          <div className="h-full w-11/12 border-b">
            <input
              type="text"
              className="h-full w-full border-none bg-transparent p-5 text-xl outline-none"
              placeholder="Title"
            />
          </div>
          <div className="flex h-full w-1/12 items-center justify-center">
            <MdPushPin size={25} />
          </div>
        </div>
        <div className="h-24 border-b">
          <textarea
            className="h-full w-full resize-none border-none bg-transparent p-3 outline-none"
            placeholder="Write your note here"
          ></textarea>
        </div>
        <div className="mt-3 px-2">
          <span className="border border-gray-600 px-2 py-1">
            Label
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex h-14 w-full justify-between border-t border-gray-600 px-2">
          <div className="flex items-center gap-5">
            <span className="hover:cursor-pointer">
              <MdColorLens size={25} />
            </span>
            <span className="hover:cursor-pointer">
              <MdLabel size={25} />
            </span>
            <span>
              <select
                className="border border-gray-600 p-1"
                name=""
                id=""
              >
                <option>Choose Priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="rounded-md border border-gray-600 p-1 px-2">
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

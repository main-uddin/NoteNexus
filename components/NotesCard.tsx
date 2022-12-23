import {
  MdColorLens,
  MdOutlinePushPin,
  MdOutlineLabel,
  MdArchive,
  MdDelete,
} from "react-icons/md";

const NotesCard = () => {
  return (
    <div className="relative h-48 space-y-1 rounded-md border border-gray-600 bg-light-foreground p-3 shadow-sm">
      <span className="absolute top-3 right-3 hover:cursor-pointer">
        <MdOutlinePushPin size={25} />
      </span>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">
          Note Title
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perspiciatis,
          blanditiis!
        </p>

        <div className="flex gap-3">
          <span className="rounded-md border border-gray-600 p-1 px-2 text-sm">
            LABEL
          </span>
          <span className="rounded-md border border-gray-600 p-1 px-2 text-sm">
            PRIORITY
          </span>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 flex h-10 items-center justify-between border-t border-gray-600 px-3">
        <div className="">
          <span className="font-semibold">
            Created At: 21/22/5
          </span>
        </div>
        <div className="flex gap-4">
          <span className="rounded-md p-1 hover:cursor-pointer hover:bg-light-background">
            <MdColorLens size={25} />
          </span>
          <span className="rounded-md p-1 hover:cursor-pointer hover:bg-light-background">
            <MdOutlineLabel size={25} />
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

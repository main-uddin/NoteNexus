import {
  MdColorLens,
  MdOutlinePushPin,
  MdOutlineLabel,
  MdArchive,
  MdDelete,
} from "react-icons/md";

const NotesCard = () => {
  return (
    <div className="relative h-40 space-y-1 rounded-md border border-gray-600 bg-light-foreground p-3 shadow-sm">
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
      </div>
      <div className="absolute left-0 right-0 bottom-0 flex h-10 items-center justify-end border-t border-gray-600 px-5">
        <div className="flex gap-5">
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

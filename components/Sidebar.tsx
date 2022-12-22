import Link from "next/link";
import { useRouter } from "next/router";
import {
  MdNotes,
  MdArchive,
  MdDelete,
} from "react-icons/md";

const Sidebar = () => {
  const router = useRouter();

  return (
    <ul className="h-full w-full space-y-3 bg-light-foreground">
      <Link href="/notes">
        <li className="flex items-center gap-2 p-4 text-lg font-normal hover:cursor-pointer hover:bg-light-background">
          <MdNotes /> Notes
        </li>
      </Link>
      <Link href="/archives">
        <li className="flex items-center gap-2 p-4 text-lg font-normal hover:cursor-pointer hover:bg-light-background">
          <MdArchive /> Archives
        </li>
      </Link>
      <Link href="/trash">
        <li className="flex items-center gap-2 p-4 text-lg font-normal hover:cursor-pointer hover:bg-light-background">
          <MdDelete /> Trash
        </li>
      </Link>
    </ul>
  );
};

export default Sidebar;

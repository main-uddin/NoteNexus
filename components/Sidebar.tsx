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
    <ul className="sticky top-16 space-y-3 bg-light-foreground">
      <Link href="/notes">
        <li
          className={`flex ${
            router.asPath === "/notes"
              ? "bg-light-primary text-white"
              : " hover:bg-light-background"
          } items-center gap-2 p-4 text-lg font-normal hover:cursor-pointer`}
        >
          <MdNotes /> Notes
        </li>
      </Link>
      <Link href="/archives">
        <li
          className={`flex ${
            router.asPath === "/archives"
              ? "bg-light-primary text-white"
              : " hover:bg-light-background"
          } items-center gap-2 p-4 text-lg font-normal hover:cursor-pointer`}
        >
          <MdArchive /> Archives
        </li>
      </Link>
      <Link href="/trash">
        <li
          className={`flex ${
            router.asPath === "/trash"
              ? "bg-light-primary text-white"
              : " hover:bg-light-background"
          } items-center gap-2 p-4 text-lg font-normal hover:cursor-pointer`}
        >
          <MdDelete /> Trash
        </li>
      </Link>
    </ul>
  );
};

export default Sidebar;

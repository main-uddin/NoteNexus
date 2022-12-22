import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  return (
    <ul className="h-full w-full space-y-3">
      <li
        className={`cursor-pointer ${
          router.asPath === "/notes" &&
          "bg-light-primary"
        } p-3 transition-all hover:bg-light-primary hover:text-white`}
      >
        <Link href="/notes">NOTES</Link>
      </li>
      <li
        className={`cursor-pointer ${
          router.asPath === "/archives" &&
          "bg-light-primary"
        } p-3 transition-all hover:bg-light-primary hover:text-white`}
      >
        <Link href="/archives">ARCHIVES</Link>
      </li>
      <li
        className={`cursor-pointer p-3 transition-all hover:bg-light-primary hover:text-white ${
          router.asPath === "/trash" &&
          "bg-light-primary"
        }`}
      >
        <Link href="/trash">TRASH</Link>
      </li>
    </ul>
  );
};

export default Sidebar;

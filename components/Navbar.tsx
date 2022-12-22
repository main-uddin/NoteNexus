import Link from "next/link";
import { MdDarkMode } from "react-icons/md";
const Navbar = (): React.ReactElement => {
  return (
    <nav className="fixed left-0 right-0 top-0 flex h-16 items-center justify-between border-b border-gray-300 bg-light-foreground px-10 shadow-sm">
      <div className="">
        <Link
          href="/"
          className="text-2xl font-semibold"
        >
          NOTES
        </Link>
      </div>
      <div className=""></div>
      <ul className="flex items-center gap-5">
        <li className="rounded-md p-2 shadow-sm hover:cursor-pointer">
          <MdDarkMode size={25} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import {
  MdDarkMode,
  MdLightMode,
} from "react-icons/md";
const Navbar = (): React.ReactElement => {
  return (
    <nav className="fixed left-0 right-0 top-0 flex h-16 items-center justify-between border-b border-gray-300 bg-light-foreground shadow-sm sm:px-5 lg:px-10">
      <div className="">
        <Link href="/">
          <span className="text-2xl font-bold">
            Notation
          </span>
        </Link>
      </div>
      <ul>
        {false ? (
          <li className="rounded-md border border-gray-300 p-1 hover:cursor-pointer hover:bg-violet-100">
            <MdDarkMode size={25} />
          </li>
        ) : (
          <li className="rounded-md border border-gray-300 p-1 hover:cursor-pointer hover:bg-violet-100">
            <MdLightMode size={25} />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

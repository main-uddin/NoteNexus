import Link from "next/link";
import {
  MdAdd,
  MdDarkMode,
  MdLightMode,
} from "react-icons/md";
import {
  useAuthStore,
  useDarkTheme,
} from "../store";
const Navbar = (): React.ReactElement => {
  const authStatus = useAuthStore(
    (store: any) => store.authStatus
  );

  const { darkMode, toggleTheme } =
    useDarkTheme();

  return (
    <nav className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between border-b border-gray-300 bg-light-foreground shadow-sm sm:px-5 lg:px-10">
      <div className="">
        <Link href="/">
          <span className="text-2xl font-bold">
            Notation
          </span>
        </Link>
      </div>
      <ul className="flex gap-5">
        {authStatus && (
          <li className="rounded-md border border-gray-300 bg-light-primary p-1 text-white hover:cursor-pointer">
            <MdAdd size={25} />
          </li>
        )}

        {darkMode ? (
          <li
            className="rounded-md border border-gray-300 p-1 transition-all hover:cursor-pointer hover:bg-violet-100"
            onClick={toggleTheme}
          >
            <MdDarkMode size={25} />
          </li>
        ) : (
          <li
            className="rounded-md border border-gray-300 p-1 transition-all hover:cursor-pointer hover:bg-violet-100"
            onClick={toggleTheme}
          >
            <MdLightMode size={25} />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

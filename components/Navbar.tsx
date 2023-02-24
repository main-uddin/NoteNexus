import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import {
  MdAdd,
  MdDarkMode,
  MdLightMode,
  MdLogout,
} from "react-icons/md";
import {
  useAuthStore,
  useDarkTheme,
  useToggleNoteStore,
} from "../store";
const Navbar = (): React.ReactElement => {
  const [loading, setLoading] = useState(true);

  const authStatus = useAuthStore(
    (store: any) => store.authStatus
  );

  const { darkMode, toggleTheme } = useDarkTheme();

  const { openCreateNote } = useToggleNoteStore(
    (store) => store
  );

  const removeAuth = useAuthStore(
    (store: any) => store.removeAuth
  );

  const router = useRouter();

  useEffect(() => {
    if (authStatus) {
      setLoading(false);
    }
  }, [authStatus]);

  return (
    <nav className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between border-b border-gray-300 bg-light-foreground shadow-sm sm:px-5 lg:px-10">
      <div className="">
        <Link href="/">
          <span className="flex gap-1 text-2xl font-bold">
            <Image
              src="/circle.png"
              alt=""
              height={20}
              width={30}
            />{" "}
            Notation
          </span>
        </Link>
      </div>
      <ul className="flex gap-5">
        {loading || router.pathname !== "/notes"
          ? null
          : authStatus && (
              <li
                className="rounded-md border border-gray-300 bg-light-primary p-1 text-white hover:cursor-pointer"
                onClick={openCreateNote}
              >
                <MdAdd size={25} />
              </li>
            )}

        {loading ? null : authStatus ? (
          <li
            className="rounded-md border border-gray-300 bg-violet-100 p-1 font-medium transition-all hover:cursor-pointer hover:bg-violet-100"
            onClick={() => {
              removeAuth();
              router.push("/");
              toast.success("user logged out successfully");
            }}
          >
            <MdLogout size={25} />
          </li>
        ) : (
          ""
        )}

        {/* {darkMode ? (
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
        )} */}
      </ul>
    </nav>
  );
};

export default Navbar;

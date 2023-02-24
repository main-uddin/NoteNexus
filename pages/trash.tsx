import Head from "next/head";
import { NotesCard, SidebarLayout } from "../components";
import { useGetDoc } from "../hooks";
import { Note } from "../types";
import { ClipLoader } from "react-spinners";

const TrashPage = (): React.ReactElement => {
  const {
    data: userData,
    isLoading: isUserDataLoading,
    isError: isUserDataError,
  } = useGetDoc("users");

  if (isUserDataLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <ClipLoader size={30} />
      </div>
    );

  return (
    <>
      <Head>
        <title>Trashed Notes | Notation</title>
      </Head>
      <SidebarLayout>
        <div className="mx-auto mt-20 space-y-5 pb-8 sm:w-11/12 md:w-4/5 lg:w-2/4">
          <div className="flex justify-center">
            <h1 className="text-center text-xl font-semibold">
              Trashed Notes
            </h1>
          </div>
          <div className="space-y-5">
            {userData?.notes
              .filter((x: Note) => !x.archive && x.trash)
              .map((x: Note) => (
                <NotesCard
                  key={x.id}
                  noteData={x}
                  userNotesData={userData.notes}
                />
              ))}
          </div>
        </div>
      </SidebarLayout>
    </>
  );
};

export default TrashPage;

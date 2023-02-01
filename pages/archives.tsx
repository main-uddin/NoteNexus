import Head from "next/head";
import { NotesCard, SidebarLayout } from "../components";
import { useGetDoc } from "../hooks";
import { Note } from "../types";

const ArchivesPage = (): React.ReactElement => {
  const {
    data: userData,
    isLoading: isUserDataLoading,
    isError: isUserDataError,
  } = useGetDoc("users");

  if (isUserDataLoading) return <h1>loading...</h1>;

  return (
    <>
      <Head>
        <title>Archived Notes | Notation</title>
      </Head>
      <SidebarLayout>
        <div className="mx-auto mt-20 space-y-5 md:w-4/5 lg:w-2/5">
          <div className="flex justify-center">
            <h1 className="text-center text-xl font-semibold">
              Archived Notes
            </h1>
          </div>
          <div className="space-y-5">
            {userData?.notes
              .filter((x: Note) => x.archive && !x.trash)
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

export default ArchivesPage;

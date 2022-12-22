import Sidebar from "./Sidebar";

const SidebarLayout = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => {
  return (
    <div className="mt-16 grid grid-cols-12 gap-5">
      <div className="sticky col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10">
        {children}
      </div>
    </div>
  );
};

export default SidebarLayout;

import Sidebar from "./Sidebar";

const SidebarLayout = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-2 min-h-screen border-r  border-gray-300 bg-light-foreground shadow-sm">
        <Sidebar />
      </div>
      <div className="col-span-10">
        {children}
      </div>
    </div>
  );
};

export default SidebarLayout;

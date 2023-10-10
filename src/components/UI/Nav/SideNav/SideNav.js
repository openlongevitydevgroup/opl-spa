import SideNavMenu from "./SideNavMenu/SideNavMenu";
function SideNav() {
  //Will have to create redux state to track whether this is open or not?
  return (
    <div className="side-navigation h-400 flex w-1/5 flex-col rounded bg-white shadow-md ">
      <h1 className="px-4 py-4 text-center text-xl font-semibold text-gray-700 underline">
        {" "}
        Filter{" "}
      </h1>
      <div className="flex flex-col  py-6 ">
        <SideNavMenu section="subject" />
        <SideNavMenu section="gene" />
      </div>
    </div>
  );
}

export default SideNav;

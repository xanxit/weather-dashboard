// Sidebar.js
import sidebarItems from "../data/sidebardata";

const Sidebar = () => {
  return (
    <div className="!w-[118px] border-r flex-col flex-shrink-0 fixed h-screen pb-2 lg:flex justify-between hidden px-8">
      <div className="relative my-3">
        <img alt="flexiple" width="55" height="55" src="/flexiple-blue.svg" />
      </div>
      <div className="flex flex-col justify-between items-start pl-4 h-full overflow-y-auto hide-scrollbar">
        <div className="mt-6">
          {sidebarItems.map((item, idx) => (
            <a
              className={`flex lg:flex-row flex-col items-center group lg:py-[30px]`}
              href="#"
              key={idx}
            >
              <span className="relative group-hover:text-[#0D0D0D]">
                <img src={item.icon} alt="sidebar item" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

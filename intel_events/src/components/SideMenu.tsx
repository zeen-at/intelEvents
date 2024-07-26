import { RxDashboard } from "react-icons/rx";
import { LuActivity } from "react-icons/lu";
import { MdOutlineUpcoming } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useState } from "react";

const sidemenu = [
  {
    icons: <RxDashboard />,
    title: "Dashboard",
    link: "dashboard",
  },
  {
    icons: <LuActivity />,
    title: "My events",
    link: "events",
  },
  {
    icons: <IoIosAddCircleOutline />,
    title: "Add Event",
    link: "create_event",
  },
  {
    icons: <MdOutlineUpcoming />,
    title: "Upcoming",
    link: "upcoming",
  },
  {
    icons: <CiCalendarDate />,
    title: "Calendar",
    link: "calendar",
  },
];

const SideMenu = () => {
  const location = useLocation();
  const [active, setActive] = useState("");
  const pathname = location.pathname;

  return (
    <div className="bg-yellow-900 text-slate-200 min-h-screen fixed">
      <div className="flex flex-col px-5 py-20 gap-10">
        {sidemenu.map((item) => (
          <Link
            to={`/user/${item.link}`}
            className={`flex flex-row items-center p-4 gap-3 hover:text-slate-50 hover:bg-yellow-600 hover:border-yellow-600  hover:border `}
            key={item.title}
          >
            <div>{item.icons}</div>
            <div className="hidden md:block">{item.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;

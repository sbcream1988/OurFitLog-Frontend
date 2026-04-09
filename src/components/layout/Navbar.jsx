import {
  LuHouse,
  LuMapPinned,
  LuNotebookPen,
  LuSend,
  LuUserCog,
  LuUserRound,
  LuZap,
} from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "홈", path: "/", icon: <LuHouse></LuHouse> },
    { name: "작성", path: "/post", icon: <LuNotebookPen></LuNotebookPen> },
    { name: "검색", path: "/search", icon: <LuMapPinned></LuMapPinned> },
    { name: "채팅", path: "/chat", icon: <LuSend></LuSend> },
    { name: "모임", path: "/gathering", icon: <LuUserRound></LuUserRound> },
    { name: "마이", path: "/my", icon: <LuUserCog></LuUserCog> },
  ];

  return (
    <nav className="fixed bottom-0 w-3/5 border-t sm:relative sm:top-0 sm:border-t-0 sm:border-b flex justify-around p-2 z-50">
      {menuItems.map((item) => {
        const isSelected = location.pathname === item.path;

        return (
          <Link
            to={item.path}
            key={item.name}
            className="group flex flex-col items-center"
          >
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl transition-all text-black ${isSelected ? "bg-primaryButton text-white scale-110" : "bg-gray-100 hover:bg-gray-200"}`}
            >
              {item.icon}
            </div>
            <span
              className={`text-xs mt-1 transition-opacity duration-300 ${isSelected ? "font-bold opacity-100" : "opacity-0 group-hover:opacity-100 text-gray-500"}`}
            >
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;

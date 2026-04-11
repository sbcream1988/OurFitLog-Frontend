import {
  LuHouse,
  LuMapPinned,
  LuNotebookPen,
  LuSend,
  LuUserCog,
  LuUserRound,
  LuLogIn,
  LuLogOut,
} from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../store/authSlice";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const menuItems = [
    { name: "홈", path: "/", icon: <LuHouse></LuHouse> },
    { name: "작성", path: "/post", icon: <LuNotebookPen></LuNotebookPen> },
    { name: "검색", path: "/search", icon: <LuMapPinned></LuMapPinned> },
    { name: "채팅", path: "/chat", icon: <LuSend></LuSend> },
    { name: "모임", path: "/gathering", icon: <LuUserRound></LuUserRound> },
    { name: "마이", path: "/my", icon: <LuUserCog></LuUserCog> },
  ];

  const handleLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      dispatch(logout());
      navigate("/");
    }
  };

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
      {/* 로그인/ 로그아웃 */}
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="group flex flex-col items-center"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl bg-gray-100 hover:bg-red-100 text-black transition-all">
            <LuLogOut></LuLogOut>
          </div>
          <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 text-gray-500 transition-opacity">
            로그아웃
          </span>
        </button>
      ) : (
        <Link to="/login" className="group flex flex-col items-center">
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl bg-gray-100 hover:bg-gray-200 text-black transition-all ${location.pathname === "/login" ? "bg-primaryButton textwhite" : ""}`}
          >
            <LuLogIn></LuLogIn>
          </div>
          <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 text-gray-500 transition-opacity">
            로그인
          </span>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;

import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar";

const MainLayout = () => {
  return (
    <div className="flex flex-col items-center ">
      <Navbar></Navbar>
      <div className="w-full flex justify-center items-center-safe min-h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;

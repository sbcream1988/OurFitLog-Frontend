import { Outlet } from "react-router-dom";

const ChatPage = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <Outlet></Outlet>
    </div>
  );
};

export default ChatPage;

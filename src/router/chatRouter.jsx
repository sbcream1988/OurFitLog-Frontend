import { lazy, Suspense } from "react";
import ChatRoom from "../components/chats/ChatRoom";

const ChatPage = lazy(() => import("../pages/chats/ChatPage"));
const ListPage = lazy(() => import("../pages/chats/ChatListPage"));

const chatRouter = () => {
  return [
    {
      path: "",
      element: (
        <Suspense fallback={"Loading"}>
          <ChatPage></ChatPage>
        </Suspense>
      ),
      children: [
        {
          path: "list",
          element: (
            <Suspense fallback={"Loading"}>
              <ListPage></ListPage>
            </Suspense>
          ),
        },
        {
          path: ":roomId",
          element: (
            <Suspense fallback={"Loading"}>
              <ChatRoom></ChatRoom>
            </Suspense>
          ),
        },
      ],
    },
  ];
};

export default chatRouter;

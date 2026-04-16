import { lazy, Suspense } from "react";

const ChatPage = lazy(() => import("../pages/chats/ChatPage"));

const chatRouter = () => {
  return [
    {
      path: "",
      element: (
        <Suspense fallback={"Loading"}>
          <ChatPage></ChatPage>
        </Suspense>
      ),
    },
  ];
};

export default chatRouter;

/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { lazy, Suspense } from "react";

const Main = lazy(() => import("../pages/MainPage"));
const Map = lazy(() => import("../pages/maps/MapPage"));
const MyPage = lazy(() => import("../pages/users/MyPage"));
const Chat = lazy(() => import("../pages/chats/ChatPage"));
const Gathering = lazy(() => import("../pages/gatherings/GatheringPage"));
const Login = lazy(() => import("../pages/users/LoginPage"));
const LoginSuccess = lazy(() => import("../components/users/LoginSuccess"));

const root = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={"Loading"}>
            <Main></Main>
          </Suspense>
        ),
      },
      {
        path: "post",
        children: [
          {
            path: "write",
            element: <Suspense fallback={"Loading"}></Suspense>,
          },
          {
            path: ":id",
            element: <Suspense fallback={"Loading"}></Suspense>,
          },
        ],
      },
      {
        path: "search",
        element: (
          <Suspense fallback={"Loading"}>
            <Map></Map>
          </Suspense>
        ),
      },
      {
        path: "chat",
        element: (
          <Suspense fallback={"Loading"}>
            <Chat></Chat>
          </Suspense>
        ),
      },
      {
        path: "gathering",
        element: (
          <Suspense>
            <Gathering></Gathering>
          </Suspense>
        ),
      },
      {
        path: "my",
        element: (
          <Suspense fallback={"Loading"}>
            <MyPage></MyPage>
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={"Loading"}>
            <Login></Login>
          </Suspense>
        ),
      },
      {
        path: "login-success",
        element: (
          <Suspense fallback={"Loading"}>
            <LoginSuccess></LoginSuccess>
          </Suspense>
        ),
      },
    ],
  },
]);

export default root;

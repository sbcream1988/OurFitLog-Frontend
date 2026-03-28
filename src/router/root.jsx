/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { lazy, Suspense } from "react";

const Main = lazy(() => import("../pages/MainPage"));
const Map = lazy(() => import("../pages/maps/MapPage"));

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
        path: "map",
        element: (
          <Suspense fallback={"Loading"}>
            <Map></Map>
          </Suspense>
        ),
      },
      {
        path: "post",
        children: [
          {
            path: "wirte",
            element: <Suspense fallback={"Loading"}></Suspense>,
          },
        ],
      },
    ],
  },
]);

export default root;

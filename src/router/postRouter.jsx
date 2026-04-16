/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";

const PostPage = lazy(() => import("../pages/posts/PostPage"));
const PostWrite = lazy(() => import("../pages/posts/PostWritePage"));

const postRouter = () => {
  return [
    {
      path: "",
      element: (
        <Suspense fallback={"Loading"}>
          {" "}
          <PostPage></PostPage>
        </Suspense>
      ),
      children: [
        {
          path: "write",
          element: (
            <Suspense fallback={"Loading"}>
              <PostWrite></PostWrite>
            </Suspense>
          ),
        },
        {
          path: ":id",
          element: (
            <Suspense fallback={"Loading"}>
              <div>상세 페이지 준비중</div>
            </Suspense>
          ),
        },
      ],
    },
  ];
};

export default postRouter;

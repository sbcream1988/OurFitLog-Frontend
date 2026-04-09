import { Outlet } from "react-router-dom";

const PostPage = () => {
  return (
    <div>
      <h1 className="text-7xl">PostPage</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default PostPage;

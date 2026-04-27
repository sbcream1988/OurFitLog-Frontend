import { useEffect, useState } from "react";
import { getPostList } from "../../api/postApi";
import PostCard from "../../components/posts/PostCard";

const PostListPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("useEffect 시작");
    getPostList(0, 10)
      .then((data) => {
        console.log("data수신");
        setPosts(data.data.content);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log("랜더링");
  return (
    <div className="flex flex-col items-center p-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post}></PostCard>
      ))}
    </div>
  );
};

export default PostListPage;

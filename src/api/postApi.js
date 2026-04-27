import jwtAxios from "./jwtAxios";

export const createPost = async (formData) => {
  const res = await jwtAxios.post("/api/posts", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res;
};

export const getPost = async (id) => {
  const res = await jwtAxios.get(`/api/posts/${id}`);
  console.log(res, res.data);
  return res;
};

export const getPostList = async (page = 0, size = 10) => {
  console.log("요청시작");
  const res = await jwtAxios.get("/api/posts", { params: { page, size } });
  console.log("응답도착", res.data, res.data.data.content);
  return res.data;
};

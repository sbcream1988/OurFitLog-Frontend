import jwtAxios from "./jwtAxios";

export const createPost = async (formData) => {
  const res = await jwtAxios.post("/api/posts", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res;
};

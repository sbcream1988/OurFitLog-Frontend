import jwtAxios from "./jwtAxios";

export const createGathering = async (gatheringDto) => {
  const res = await jwtAxios.post("/api/gatherings", gatheringDto);
  return res.data;
};

export const gatheringList = async () => {
  const res = await jwtAxios.get("/api/gatherings");
  return res.data;
};

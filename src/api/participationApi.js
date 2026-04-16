import jwtAxios from "./jwtAxios";
export const attendGathering = async (gatheringId) => {
  const res = await jwtAxios.post(`/api/participations/${gatheringId}`);
  return res.data;
};

export const cancelGathering = async (gatheringId) => {
  const res = await jwtAxios.delete(`/api/participations/${gatheringId}`);
  return res.data;
};

import jwtAxios from "./jwtAxios";

export const getChatHistory = async (roomId) => {
  const res = await jwtAxios.get(`/api/chat/rooms/${roomId}/messages`);
  return res.data;
};

export const createRoom = async (chatRoomRequestDto) => {
  const res = await jwtAxios.post(`/api/chat/room`, chatRoomRequestDto);
  return res.data;
};

export const getChatRooms = async () => {
  const res = await jwtAxios.get(`/api/chat/rooms`);
  return res.data;
};

export const getOrCreateRooms = async (partnerId) => {
  const res = jwtAxios.post(`/api/chat/room/dm/${partnerId}`);
  return (await res).data;
};

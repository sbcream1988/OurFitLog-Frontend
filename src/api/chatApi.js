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
  const res = await jwtAxios.post(`/api/chat/room/dm/${partnerId}`);
  return (await res).data;
};

export const leaveRoom = async (roomId) => {
  const res = await jwtAxios.delete(`/api/chat/room/${roomId}`);
  return res.data;
};

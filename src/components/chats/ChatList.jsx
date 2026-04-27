import { useEffect, useState } from "react";
import ChatItem from "../chats/ChatItem";
import { getChatRooms } from "../../api/chatApi";
import ChatRoom from "./ChatRoom";
import { useNavigate } from "react-router-dom";

const ChatList = () => {
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  const handleMoveChatRoom = (roomId) => {
    navigate(`/chat/${roomId}`);
  };

  useEffect(() => {
    getChatRooms().then((data) => {
      setRooms(data.data);
    });
  }, []);

  if (selectedRoomId) {
    return (
      <div>
        <button
          onClick={() => {
            setSelectedRoomId(null);
          }}
          className="p-2 text-white"
        >
          목록으로
        </button>
        <ChatRoom roomId={selectedRoomId}></ChatRoom>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-white text-xl mb-4">채팅 목록</h2>
      {rooms && rooms.length > 0 ? (
        rooms.map((room) => (
          <ChatItem
            key={room.roomId}
            room={room}
            onClick={handleMoveChatRoom}
          ></ChatItem>
        ))
      ) : (
        <div className="text-gray-400">참여중인 채팅방이 없습니다</div>
      )}
    </div>
  );
};

export default ChatList;

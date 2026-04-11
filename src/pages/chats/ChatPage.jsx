import { useState } from "react";
import ChatList from "../../components/chats/ChatList";
import ChatRoom from "../../components/chats/ChatRoom";

const ChatPage = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div className="relative">
      <ChatList onSelectRoom={(id) => setSelectedRoom(id)}></ChatList>
      {selectedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-full max-w-lg h-[80vh] rounded-t-2xl">
            <button
              onClick={() => {
                setSelectedRoom(null);
              }}
            >
              닫기
            </button>
            <ChatRoom roomId={selectedRoom}></ChatRoom>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPage;

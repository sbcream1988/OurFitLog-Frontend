import { LuBell } from "react-icons/lu";
import { leaveRoom } from "../../api/chatApi";

const ChatItem = ({ room, onClick, onLeaveSuccess }) => {
  const handleLeaveRoom = async (e, roomId) => {
    e.stopPropagation();

    if (!window.confirm("채팅방을 나가시겠습니까?")) return;

    try {
      await leaveRoom(roomId);
      alert("방을 나갔습니다");
      if (onLeaveSuccess) onLeaveSuccess();
    } catch (e) {
      console.error("채팅방 나가기 실패: ", e);
    }
  };

  return (
    <div
      className="bg-blue-900 w-2xl hover:cursor-pointer"
      onClick={() => {
        onClick(room.roomId);
        console.log(`${room.name} 방으로 이동`);
      }}
    >
      <div className="flex flex-row p-2 m-2">
        <div className="w-2/12 flex items-center justify-center">
          <div className="fix w-12 h-12 border bg-green-200 border-white rounded-full text-xs flex items-center justify-center">
            {room.name ? room.name.substring(0, 1) : "P"}
          </div>
        </div>
        <div className="w-8/12 flex-row">
          <div className="p-2 bg-blue-300 text-sm font-bold">
            {room.name || "이름 없는 채팅방"}
          </div>
          <div className="p-2 bg-blue-400 text-sm">
            {room.lastMessage || "새로운 메시지가 없습니다"}
          </div>
        </div>

        <div className="w-2/12 flex-row">
          <div className="p-2 bg-red-200 text-sm flex justify-center">
            {room.lastChatTime || "방금전"}
          </div>
          <div className="p-2 bg-orange-200 text-xl flex justify-center cursor-pointer">
            <button
              className="text-sm"
              onClick={(e) => {
                handleLeaveRoom(e, room.roomId);
              }}
            >
              나가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;

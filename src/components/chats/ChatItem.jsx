import { LuBell } from "react-icons/lu";

const ChatItem = ({ room, onClick }) => {
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
            {room.lasChatTime || "방금전"}
          </div>
          <div className="p-2 bg-orange-200 text-xl">
            <LuBell></LuBell>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;

const ChatItem = () => {
  return (
    <div className="bg-blue-900 w-2xl">
      <div className="flex flex-row p-2 m-2">
        <div className="w-2/12 flex items-center justify-center">
          <div className="fix w-12 h-12 border bg-green-200 border-white rounded-full text-xs flex items-center justify-center">
            이미지
          </div>
        </div>
        <div className="w-8/12 flex-row">
          <div className="p-2 bg-blue-300 text-sm font-bold">
            채팅방이름? 닉네임?
          </div>
          <div className="p-2 bg-blue-400 text-sm">채팅내용</div>
        </div>

        <div className="w-2/12 flex-row">
          <div className="p-2 bg-red-200 text-sm flex justify-center">시간</div>
          <div className="p-2 bg-orange-200 text-xl">
            <LuBell></LuBell>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;

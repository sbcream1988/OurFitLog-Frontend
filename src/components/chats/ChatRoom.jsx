import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { getChatHistory } from "../../api/chatApi";

const ChatRoom = ({ roomId }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const stompClient = useRef(null);

  useEffect(() => {
    getChatHistory(roomId).then((res) => setMessages(res.data));

    const socket = new SockJS("http://localhost:8080/ws-stomp");
    stompClient.current = Stomp.over(socket);

    stompClient.current.connect({}, () => {
      stompClient.current.subscribe(`/sub/chat/room/${roomId}`, (tick) => {
        const newMessage = JSON.parse(tick.body);
        setMessages((prev) => [...prev, newMessage]);
      });
    });
    return () => {
      if (stompClient.current) stompClient.current.disconnect();
    };
  }, [roomId]);
  const sendMessage = () => {
    if (stompClient.current && inputMessage.trim()) {
      const body = {
        roomId: roomId,
        sender: "user@email.com",
        message: inputMessage,
      };
      stompClient.current.send("/pub/chat/message", {}, JSON.stringify(body));
      setInputMessage("");
    }
  };
  return (
    <div className="flex flex-col h=[500px] w-full border border-white p-4">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <span className="font-bold">{msg.senderNickname}: </span>
            <span>{msg.message}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="flex-1 bg-transparent border border-white p-2 rounded-2xl"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        ></input>
      </div>
    </div>
  );
};

export default ChatRoom;

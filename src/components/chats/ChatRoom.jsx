import { useEffect, useRef, useState } from "react";

import { Client } from "@stomp/stompjs";
import { getChatHistory } from "../../api/chatApi";
import { useParams } from "react-router-dom";

const ChatRoom = () => {
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const stompClient = useRef(null);

  useEffect(() => {
    if (!roomId) return;

    getChatHistory(roomId).then((res) => setMessages(res.data));

    const client = new Client({
      brokerURL: "ws://localhost:8080/ws-stomp",
      connectHeaders: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      onConnect: () => {
        console.log("Connected");
        client.subscribe(`/sub/chat/room/${roomId}`, (message) => {
          const newMessage = JSON.parse(message.body);
          setMessages((prev) => [...prev, newMessage]);
        });
      },
      onStompError: (frame) => {
        console.error("STOMP error", frame);
      },
    });
    client.activate();
    stompClient.current = client;

    return () => {
      client.deactivate();
    };
  }, [roomId]);

  const sendMessage = () => {
    if (
      stompClient.current &&
      stompClient.current.connected &&
      inputMessage.trim()
    ) {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      };

      const chatMessage = {
        roomId: roomId,
        message: inputMessage,
      };
      stompClient.current.publish({
        destination: "/pub/chat/message",
        headers: headers,
        body: JSON.stringify({
          chatMessage,
        }),
      });
      setInputMessage("");
    } else {
      console.warn("STOMP 연결이 아직 수립되지 않았습니다");
    }
  };
  return (
    <div className="flex flex-col h=[500px] w-xl border border-white p-4">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, index) => {
          const myMessage = msg.senderId === localStorage.getItem("memberId");
          return (
            <div
              key={index}
              className={`flex ${myMessage ? "justify-end" : "justify-start"} mb-2`}
            >
              <div
                className={`p-3 rounded-lg max-w-[75%] ${
                  myMessage ? "bg-blue-600" : "bg-gray-700"
                }`}
              >
                <div className="font-bold">{msg.senderNickname}: </div>
                <div>{msg.message}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="flex-1 bg-transparent border border-gray p-2 m-2 rounded-2xl"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        ></input>
        <button
          onClick={() => sendMessage()}
          className="border border-gray-500 rounded-xl p-2 m-2 bg-primaryButton hover:bg-secondary cursor-pointer"
        >
          보내기
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;

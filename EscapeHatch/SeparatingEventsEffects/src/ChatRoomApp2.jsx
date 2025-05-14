import { useEffect, useState } from "react";
import { createConnection } from "./chat2";
import { showNotification } from "./notification";

const serverUrl = "https://localhost:1234";

function ChatRoom2({ roomId, theme }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on("connected", () => {
      showNotification("Connected!", theme);
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, theme]);
  return <h1>Welcome to the {roomId} room!</h1>;
}

export default function ChatRoomApp2() {
  const [roomId, setRoomId] = useState("general");
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Use dark theme
      </label>
      <hr />
      <ChatRoom2 roomId={roomId} theme={isDark ? "dark" : "light"} />
    </>
  );
}

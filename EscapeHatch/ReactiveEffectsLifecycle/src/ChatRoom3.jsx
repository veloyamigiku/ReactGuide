import { useEffect, useState } from "react";
import { createConnection } from "./chat";

const serverUrl = "https://localhost:1234";
const roomId = "general";

function ChatRoom3() {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, []);
  return <h1>Welcome to the {roomId} room!</h1>;
}

export function ChatRoomApp3() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Close chat" : "Open chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom3 />}
    </>
  );
}

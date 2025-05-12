import { ChatRoomApp } from "./ChatRoom";
import { ChatRoomApp2 } from "./ChatRoom2";
import { ChatRoomApp3 } from "./ChatRoom3";

function App() {
  return (
    <>
      <div>
        <h3>エフェクトが再同期できることを React はどのように確認するのか </h3>
        <ChatRoomApp />
      </div>
      <div>
        <h3>エフェクトはリアクティブ (reactive) な値に “反応” する</h3>
        <ChatRoomApp2 />
      </div>
      <div>
        <h3>依存配列が空のエフェクトは何を意味するのか</h3>
        <ChatRoomApp3 />
      </div>
    </>
  );
}

export default App;

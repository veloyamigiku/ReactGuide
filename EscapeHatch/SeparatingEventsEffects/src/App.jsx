import ChatRoomApp from "./ChatRoomApp";
import ChatRoomApp2 from "./ChatRoomApp2";

function App() {
  return (
    <>
      <div>
        <h3>イベントハンドラとエフェクトのどちらを選ぶか</h3>
        <ChatRoomApp />
      </div>
      <div>
        <h3>リアクティブな値とリアクティブなロジック</h3>
        <ChatRoomApp2 />
      </div>
    </>
  );
}

export default App;

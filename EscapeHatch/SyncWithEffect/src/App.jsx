import ChatRoom from "./ChatRoom";
import VideoPlayerApp2 from "./VIdeoPlayerApp2";
import VideoPlayerApp from "./VideoPlayerApp";

function App() {
  return (
    <>
      <div>
        <h3>ステップ 1：エフェクトを宣言する</h3>
        <VideoPlayerApp />
      </div>
      <div>
        <h3>ステップ 2：エフェクトの依存配列を指定する</h3>
        <VideoPlayerApp2 />
      </div>
      <div>
        <h3>ステップ 3：必要に応じてクリーンアップを追加する</h3>
        <ChatRoom />
      </div>
    </>
  );
}

export default App;

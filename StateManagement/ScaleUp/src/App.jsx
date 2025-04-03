import TaskApp from "./TaskApp";
import TaskApp2 from "./TaskApp2";
import TaskApp3 from "./TaskApp3";

function App() {
  return (
    <>
      <div>
        <div>
          <h2>リデューサとコンテクストの組み合わせ(リデューサのみ)</h2>
          <TaskApp />
        </div>
        <div>
          <h2>リデューサとコンテクストの組み合わせ</h2>
          <TaskApp2 />
        </div>
        <div>
          <h2>すべての繋ぎ込みコードを 1 つのファイルに移動</h2>
          <TaskApp3 />
        </div>
      </div>
    </>
  );
}

export default App;

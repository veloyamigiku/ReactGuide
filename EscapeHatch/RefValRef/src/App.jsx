import Counter from "./Counter";
import StopWatch from "./StopWatch";

function App() {
  return (
    <>
      <div>
        <h2>コンポーネントに ref を追加する</h2>
        <Counter />
      </div>
      <div>
        <h2>例：ストップウォッチの作成</h2>
        <StopWatch />
      </div>
    </>
  );
}

export default App;

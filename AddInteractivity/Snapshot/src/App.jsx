import Counter from "./Counter";
import CounterWithAlert from "./CounterWithAlert";
import CounterWithSetTimeoutAlert from "./CounterWithSetTimeoutAlert";
import Form from "./Form";

function App() {
  return (
    <>
      <div>
        <h2>state のセットでレンダーがトリガされる</h2>
        <Form />
      </div>
      <div>
        <h2>レンダーは時間を切り取ってスナップショットを取る </h2>
        <Counter />
      </div>
      <div>
        <h2>時間経過とstate</h2>
        <CounterWithAlert />
        <h2>時間経過とstate(setTimeout)</h2>
        <CounterWithSetTimeoutAlert />
      </div>
    </>
  );
}

export default App;

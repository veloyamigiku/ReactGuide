import CounterReplaceUpdate from "./CounterReplaceUpdate";
import CounterUpdateReplace from "./CounterUpdateReplace";
import CounterMultiUpdate from "./CouterMultiUpdate";

function App() {
  return (
    <>
      <div>
        <h2>次のレンダー前に同じ state を複数回更新する</h2>
        <CounterMultiUpdate />
      </div>
      <div>
        <h2>state を置き換えた後に更新するとどうなるか</h2>
        <CounterReplaceUpdate />
      </div>
      <div>
        <h2>state を更新した後に置き換えるとどうなるか</h2>
        <CounterUpdateReplace />
      </div>
    </>
  );
}

export default App;

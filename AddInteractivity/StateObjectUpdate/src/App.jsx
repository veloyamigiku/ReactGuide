import Form from "./Form";
import FormImmer from "./FormImmer";
import FormNest from "./FormNest";
import MovingDot from "./MovingDot";

function App() {
  return (
    <>
      <div>
        <h2>state を読み取り専用として扱う</h2>
        <MovingDot />
      </div>
      <div>
        <h2>スプレッド構文を使ったオブジェクトのコピー </h2>
        <Form />
      </div>
      <div>
        <h2>ネストされたオブジェクトの更新</h2>
        <FormNest />
      </div>
      <div>
        <h2>Immer で簡潔な更新ロジックを書く</h2>
        <FormImmer />
      </div>
    </>
  );
}

export default App;

import FormStep1 from "./FormStep1";
import FormStep5 from "./FormStep5";

let statuses = ["empty", "typing", "submitting", "success", "error"];

function App() {
  return (
    <>
      {statuses.map((status) => (
        <section key={status}>
          <h4>Step 1: コンポーネントの様々な視覚状態を特定する({status}):</h4>
          <FormStep1 status={status} />
        </section>
      ))}
      <div>
        <h4>Step 5: イベントハンドラを接続して state を設定する </h4>
        <FormStep5 />
      </div>
    </>
  );
}

export default App;

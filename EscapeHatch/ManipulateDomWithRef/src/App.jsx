import CatFriends from "./CatFriends";
import Form from "./Form";

function App() {
  return (
    <>
      <div>
        <div>
          <h3>例：テキスト入力フィールドにフォーカスを当てる</h3>
          <Form />
        </div>
        <div>
          <h3>例：要素へのスクロール</h3>
          <CatFriends />
        </div>
      </div>
    </>
  );
}

export default App;

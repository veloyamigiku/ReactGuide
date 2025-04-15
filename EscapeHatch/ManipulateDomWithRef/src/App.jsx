import CatFriends from "./CatFriends";
import Form from "./Form";
import MyForm from "./MyForm";

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
        <div>
          <h3>別のコンポーネントの DOM ノードにアクセスする</h3>
          <MyForm />
        </div>
      </div>
    </>
  );
}

export default App;

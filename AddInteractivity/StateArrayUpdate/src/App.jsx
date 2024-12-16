import ListAdd from "./ListAdd";
import ListRemove from "./ListRemove";
import ShapeEditor from "./ListTransform";

function App() {
  return (
    <>
      <div>
        <h2>配列に要素を追加 </h2>
        <ListAdd />
      </div>
      <div>
        <h2>配列から要素を削除</h2>
        <ListRemove />
      </div>
      <div>
        <h2>配列の変換</h2>
        <ShapeEditor />
      </div>
    </>
  );
}

export default App;

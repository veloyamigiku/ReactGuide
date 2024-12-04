import Button from "./Button";
import ButtonPropsName from "./ButtonPropsName";
import ToolbarPropagationStop from "./ToolbarPropagationStop";
import Toolbar from "./Toolbar";
import ToolbarParentChild from "./ToolbarParentChild";
import ToolbarPropagation from "./ToolbarPropagation";
import ToolbarPropsName from "./ToolbarPropsName";
import Signup from "./Signup";
//import Signup from "."

function App() {
  return (
    <>
      <div id="button">
        <h3>イベントハンドラの追加</h3>
        <Button />
      </div>
      <div id="toolbar">
        <h3>イベントハンドラでの props の読み取り</h3>
        <Toolbar />
      </div>
      <div id="toolbar_parent_child">
        <h3>イベントハンドラを props として渡す</h3>
        <ToolbarParentChild />
      </div>
      <div id="toolbar_parent_child">
        <h3>イベントハンドラの props の命名</h3>
        <ButtonPropsName onSmash={() => alert("Playing!")}>
          Play Movie
        </ButtonPropsName>
        <ButtonPropsName onSmash={() => alert("Uploading!")}>
          Upload Image
        </ButtonPropsName>
        <ToolbarPropsName
          onPlayMovie={() => alert("Playing!")}
          onUploadImage={() => alert("Uploading!")}
        />
      </div>
      <div id="propagation">
        <h3>イベント伝播</h3>
        <ToolbarPropagation />
      </div>
      <div id="propagation">
        <h3>伝搬の停止</h3>
        <ToolbarPropagationStop />
      </div>
      <div id="default_operation">
        <h3>デフォルト動作を防ぐ</h3>
        <Signup />
      </div>
    </>
  );
}

export default App;

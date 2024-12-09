import Gallery from "./Gallery";
import GalleryDoubleState from "./GalleryDoubleState";

function App() {
  return (
    <>
      <div>
        <h2>初めてのフック</h2>
        <Gallery />
      </div>
      <div>
        <h2>コンポーネントで複数のstate変数を使う</h2>
        <GalleryDoubleState />
      </div>
    </>
  );
}

export default App;

import Page from "./Page";
import PageWithContext from "./PageWithContext";
import PageWithContext2 from "./PageWithContext2";
import ProfilePageWithContext from "./ProfilePageWithContext";

function App() {
  return (
    <>
      <div>
        <h1>コンテクスト：props 受け渡しの代替手段</h1>
        <Page />
      </div>
      <div>
        <h1>コンテクスト：props 受け渡しの代替手段(コンテキスト)</h1>
        <PageWithContext />
      </div>
      <div>
        <h1>同一コンポーネントでコンテクストを使用しつつ提供</h1>
        <PageWithContext2 />
      </div>
      <div>
        <h1>コンテクストは中間コンポーネントを貫通する</h1>
        <ProfilePageWithContext />
      </div>
    </>
  );
}

export default App;

import Messenger from "./Messenger";
import Rect from "./Rect";
import RectCheck from "./RectCheck";
import RectSamePointDeferentComp from "./RectSamePointDeferentComp";
import RectSamePointDeferentComp2 from "./RectSamePointDeferentComp2";
import RectSamePointSameComp from "./RectSamePointSameComp";
import ScoreboardOption1 from "./ScoreboardOption1";
import Scoreboard from "./ScoreboardOption1";
import ScoreboardOption2 from "./ScoreboardOption2";

function App() {
  return (
    <>
      <div>
        <h2>state はレンダーツリー内の位置に結びついている</h2>
        <Rect />
      </div>
      <div>
        <h2>state はレンダーツリー内の位置に結びついている(checkbox)</h2>
        <RectCheck />
      </div>
      <div>
        <h2>同じ位置の同じコンポーネントはstateが保持される</h2>
        <RectSamePointSameComp />
      </div>
      <div>
        <h2>同じ位置の異なるコンポーネントはstateをリセットする</h2>
        <RectSamePointDeferentComp />
      </div>
      <div>
        <h2>同じ位置の異なるコンポーネントはstateをリセットする(サブツリー)</h2>
        <RectSamePointDeferentComp2 />
      </div>
      <div>
        <h2>同じ位置で state をリセット</h2>
        <h3>オプション1：異なる位置でコンポーネントをレンダー</h3>
        <ScoreboardOption1 />
      </div>
      <div>
        <h2>同じ位置で state をリセット</h2>
        <h3>オプション 2：key で state をリセットする</h3>
        <ScoreboardOption2 />
      </div>
      <div>
        <h2>key でフォームをリセットする</h2>
        <Messenger />
      </div>
    </>
  );
}

export default App;

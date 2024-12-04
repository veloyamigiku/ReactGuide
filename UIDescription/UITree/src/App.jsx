import Copyright from "./Copyright";
import FancyText from "./FancyText"
import InspirationGenerator from "./InspirationGenerator";
import InspirationGeneratorCd from "./Conditional/InspirationGenerator";

function App() {

  return (
    <>
      <div id="uitree">
        <FancyText title text="Get Inspired App" />
        <InspirationGenerator>
          <Copyright year={2004} />
        </InspirationGenerator>
      </div>
      <div id="conditional">
        <FancyText title text="Get Inspired App(Conditional)" />
        <InspirationGeneratorCd>
          <Copyright year={2004} />
        </InspirationGeneratorCd>
      </div>
    </>
  );
}

export default App;

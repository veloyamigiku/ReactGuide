import FeedbackForm from "./FeedbackForm";
import Form from "./Form";
import Menu from "./Menu";
import TravelPlan from "./TravelPlan";
import TravelPlanDelete from "./TravelPlanDelete";

function App() {
  return (
    <>
      <div>
        <h2>stateの矛盾を避ける</h2>
        <FeedbackForm />
      </div>
      <div>
        <h2>冗長なstateを避ける</h2>
        <Form />
      </div>
      <div>
        <h2>state内の重複を避ける</h2>
        <Menu />
      </div>
      <div>
        <h2>深くネストされたstateを避ける</h2>
        <TravelPlan />
      </div>
      <div>
        <h2>深くネストされたstateを避ける(メモリ削減)</h2>
        <TravelPlanDelete />
      </div>
    </>
  );
}

export default App;

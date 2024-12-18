import { initialTravelPlan } from "./places";
import { useImmer } from "use-immer";

function PlaceTree({ id, parentId, placesById, onComplete }) {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <li>
      {place.title}
      <button
        onClick={() => {
          onComplete(parentId, id);
        }}
      >
        Complete
      </button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
}

export default function TravelPlanDelete() {
  const [plan, updatePlan] = useImmer(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;

  function handleComplete(parentId, childId) {
    updatePlan((draft) => {
      const parent = draft[parentId];
      parent.childIds = parent.childIds.filter((id) => id !== childId);
      function deleteAllChildren(id) {
        const place = draft[id];
        place.childIds.forEach(deleteAllChildren);
        delete draft[id];
      }
      deleteAllChildren(childId);
    });
  }

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map((id) => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
}

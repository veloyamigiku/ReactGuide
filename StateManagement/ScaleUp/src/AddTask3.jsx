import { useContext, useState } from "react";
import { TasksDispatchContext3 } from "./TaskContext3";

let nextId = 3;

export default function AddTask3() {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext3);

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </>
  );
}

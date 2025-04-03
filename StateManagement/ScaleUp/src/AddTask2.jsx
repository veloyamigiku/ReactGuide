import { useContext, useState } from "react";
import { TasksDispatchContext2 } from "./TaskContext2";

let nextId = 3;

export default function AddTask2() {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext2);

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

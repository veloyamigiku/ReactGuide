import { useReducer } from "react";
import { TasksDispatchContext2, TasksContext2 } from "./TaskContext2";
import AddTask2 from "./AddTask2";
import TaskList2 from "./TaskList2";

const initialTasks = [
  {
    id: 0,
    text: "Philosopher’s Path",
    done: true,
  },
  {
    id: 1,
    text: "Visit the temple",
    done: false,
  },
  {
    id: 2,
    text: "Drink matcha",
    done: false,
  },
];

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unkown action: " + action.type);
    }
  }
}

export default function TaskApp2() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    <>
      <TasksContext2.Provider value={tasks}>
        <TasksDispatchContext2.Provider value={dispatch}>
          <h1>Day off in Kyoto</h1>
          <AddTask2 />
          <TaskList2 />
        </TasksDispatchContext2.Provider>
      </TasksContext2.Provider>
    </>
  );
}

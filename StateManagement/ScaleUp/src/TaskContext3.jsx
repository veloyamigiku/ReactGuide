import { createContext, useReducer } from "react";

export const TasksContext3 = createContext(null);

export const TasksDispatchContext3 = createContext(null);

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

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext3.Provider value={tasks}>
      <TasksDispatchContext3.Provider value={dispatch}>
        {children}
      </TasksDispatchContext3.Provider>
    </TasksContext3.Provider>
  );
}

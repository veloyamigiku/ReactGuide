import { useReducer, useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { useImmerReducer } from "use-immer";

const initialTasks = [
  {
    id: 0,
    text: "Visit Kafka Museum",
    done: true,
  },
  {
    id: 1,
    text: "Watch a puppet show",
    done: false,
  },
  {
    id: 2,
    text: "Lennon Wall pic",
    done: false,
  },
];
let nextId = initialTasks.length;

function tasksReducer(draft, action) {
  switch (action.type) {
    case "added": {
      /*return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];*/
      draft.push({
        id: action.id,
        text: action.text,
        done: false,
      });
      break;
    }
    case "changed": {
      /*return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });*/
      const index = draft.findIndex((t) => t.id === action.task.id);
      draft[index] = action.task;
      break;
    }
    case "deleted": {
      //return tasks.filter((t) => t.id !== action.id);
      return draft.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export default function TaskApp() {
  //const [tasks, setTasks] = useState(initialTasks);
  //const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    /*setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);*/
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeText(task) {
    /*setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );*/
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    //setTasks(tasks.filter((t) => t.id !== taskId));
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <>
      <h1>Pargue itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeText}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

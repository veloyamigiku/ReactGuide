import AddTask3 from "./AddTask3";
import TaskList3 from "./TaskList3";
import { TasksProvider } from "./TaskContext3";

export default function TaskApp3() {
  return (
    <>
      <TasksProvider>
        <h1>Day off in Kyoto</h1>
        <AddTask3 />
        <TaskList3 />
      </TasksProvider>
    </>
  );
}

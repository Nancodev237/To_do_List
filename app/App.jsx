import { useState } from "react"

export default function App() {
  // State variable to store the list of tasks
  const [tasks, setTasks] = useState([
    "Do laundry",
    "Go to gym",
    "Walk dog",
  ]);

  return (
    <div>
      <h1>My To-Do List</h1>
      {/* Pass tasks array to ToDoList as a prop */}
      <ToDoList tasks={tasks} />
    </div>
  );
}

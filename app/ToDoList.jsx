// Destructure tasks from props
function ToDoList({ tasks }) {
  return (
    <ul>
      {/* Map over tasks array and render each as a list item */}
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
}

export default ToDoList;

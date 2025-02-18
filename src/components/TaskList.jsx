import TaskItem from "./TaskItem";

function TaskList({ tasks, setTasks, filter }) {
  function handleTaskStatus(idx) {
    setTasks(
      tasks.map((task) =>
        task.id === idx ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleTaskDelete(idx) {
    setTasks(tasks.filter((task) => task.id !== idx));
  }

  const disp_tasks = tasks.filter((task) => {
    switch (filter) {
      case 1:
        return !task.completed;
      case 2:
        return task.completed;
      default:
        return true;
    }
  });
  return (
    <div className="task-list">
      {disp_tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          name={task.text}
          completed={task.completed}
          handlerStatus={handleTaskStatus}
          handlerDelete={handleTaskDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;

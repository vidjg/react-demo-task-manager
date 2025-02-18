import TaskItem from "./TaskItem";

function TaskList({ tasks, handlerStatus, handlerDelete }) {
  const disp_tasks = tasks.filter(task => !task.hide);
  return (
    <div className="task-list">
      {disp_tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          name={task.text}
          completed={task.completed}
          hide={task.hide}
          handlerStatus={handlerStatus}
          handlerDelete={handlerDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;

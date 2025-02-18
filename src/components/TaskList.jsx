import TaskItem from "./TaskItem";

function TaskList({ tasks, handlerStatus, handlerDelete }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          name={task.text}
          completed={task.completed}
          handlerStatus={handlerStatus}
          handlerDelete={handlerDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;

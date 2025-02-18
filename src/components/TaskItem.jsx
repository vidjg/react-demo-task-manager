import "./task.css";

function TaskItem({ id, name, completed, handlerStatus, handlerDelete }) {
  return (
    <div className="task-item">
      <div className="task-name">{name}</div>
      <div className="task-status">
        已完成：
        <input
          type="checkbox"
          onChange={() => handlerStatus(id)}
          checked={completed}
        ></input>
      </div>
      <div className="task-delete">
        <button onClick={() => handlerDelete(id)}>删除</button>
      </div>
    </div>
  );
}

export default TaskItem;

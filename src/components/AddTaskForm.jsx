function AddTaskForm({ handlerAddTask }) {
  return (
    <div className="add-task-form">
      新增任务： 
      <input id="task-name" type="text" placeholder="任务名称不能为空"></input>
      <button onClick={handlerAddTask}>添加</button>
    </div>
  );
}

export default AddTaskForm;

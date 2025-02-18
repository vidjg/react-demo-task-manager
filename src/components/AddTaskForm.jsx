import { useState } from 'react';

function AddTaskForm({ tasks, setTasks }) {
  const [newTaskName, setNewTaskName] = useState("");
  const [maxId, setMaxId] = useState(3);
  function handlerAddTask() {
    // const input_text = document.getElementById("task-name").value;
    if (newTaskName === "") {
      alert("任务名称不能为空！");
    } else {
      // const max_id = Math.max.apply(null, tasks.map(task => task.id));
      // let new_id = tasks.length + 1 > max_id ? tasks.length + 1 : max_id + 1;
      console.log("New Task: (" + (maxId + 1) + ") " + newTaskName);
      setTasks(
        tasks.concat([{ id: maxId + 1, text: newTaskName, completed: false }])
      );
      setMaxId(maxId + 1);
    }
    // document.getElementById("task-name").value = "";
    setNewTaskName("");
  }

  return (
    <div className="add-task-form">
      新增任务：
      <input
        id="task-name"
        type="text"
        placeholder="任务名称不能为空"
        onChange={(e) => setNewTaskName(e.target.value)}
        value={newTaskName}
      ></input>
      <button onClick={handlerAddTask}>添加</button>
    </div>
  );
}

export default AddTaskForm;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "学习React", completed: false },
    { id: 2, text: "构建任务管理应用", completed: true },
    { id: 3, text: "部署到Vercel", completed: false },
  ])
  const [maxId, setMaxId] = useState(3);

  function handleAddTask() {
    const input_text = document.getElementById("task-name").value;
    if (input_text === "") {
      alert("任务名称不能为空！")
    } else {
      // const max_id = Math.max.apply(null, tasks.map(task => task.id));
      // let new_id = tasks.length + 1 > max_id ? tasks.length + 1 : max_id + 1;  
      console.log('New Task: (' + (maxId + 1) + ') ' + input_text);
      setTasks(tasks.concat(
        [{ id: maxId + 1, text: input_text, completed: false}]
      ))
      setMaxId(maxId + 1);
    }
    document.getElementById("task-name").value = "";
  }

  function handleTaskStatus(idx) {
    setTasks(tasks.map(
      task => task.id == idx ? {...task, completed: !task.completed} : task
    ))
  }

  function handleTaskDelete(idx) {
    setTasks(tasks.filter(
      task => task.id !== idx
    ))
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <AddTaskForm handlerAddTask={handleAddTask}/>
      <TaskList 
        tasks={tasks} 
        handlerStatus={handleTaskStatus}
        handlerDelete={handleTaskDelete}
      />
    </div>
  );
}

export default App;

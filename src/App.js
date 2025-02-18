import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "学习React", completed: false },
    { id: 2, text: "构建任务管理应用", completed: true },
    { id: 3, text: "部署到Vercel", completed: false },
  ])
  const [filter, setFilter] = useState(0);

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
      <AddTaskForm tasks={tasks} setTasks={setTasks}/>
      <FilterButtons filter={filter} setFilter={setFilter}/>
      <TaskList 
        tasks={tasks} 
        filter={filter}
        setTasks={setTasks}
      />
    </div>
  );
}

export default App;

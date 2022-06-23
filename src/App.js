import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo"
import Form from "./components/Form"
import FilterButton from './components/FilterButton';

import React, { useState } from "react";
import { nanoid } from "nanoid";

function App(props) {
  
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");

  function addTask(name) {
    if (name==="") return;
    const newTask = {
      id: "task-"+nanoid(),
      name: name,
      completed: false
    };
    setTasks([...tasks, newTask]);
    console.log(tasks);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task=>{
      if (id===task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    })
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    console.log(id);
    const remainingTasks = tasks.filter(task=>id!==task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const updatedTasks = tasks.map(task=>{
      if (id===task.id) {
        return {...task, name: newName}
      }
      return task;
    })
    setTasks(updatedTasks);

  }

  
  tasks.map(task=>{console.log(task.id+" "+task.completed)})

  const taskList = tasks.filter(props.FILTER_MAP[filter]).map(task => (
    <Todo 
      id={task.id} 
      name={task.name} 
      completed={task.completed} 
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  const filterList = props.FILTER_NAMES.map(name=>(
    <FilterButton 
      key={name} 
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}  
    />
  ));

  const countString = tasks.length + (tasks.length===1?" task ":" tasks ") + "remaining";

  return (
    <div className='todoapp'>
      <h1>Todont</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception flex">
        {filterList}

      </div>

      <h2 id="list-heading">{countString}</h2>
      <div
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </div>
    </div>
  );

}

export default App;

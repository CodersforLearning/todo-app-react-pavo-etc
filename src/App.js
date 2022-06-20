import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo"
import Form from "./components/Form"
import FilterButton from './components/FilterButton';

function App(props) {
  console.log("tasks "+props.tasks);

  const taskList = props.tasks.map(task => (
    <Todo 
      id={task.id} 
      name={task.name} 
      completed={task.completed} 
      key={task.id}
    />
  ));
  return (
    <div className='todoapp'>
      <h1>Todont</h1>
      <Form />
      <div className="filters btn-group stack-exception flex">
        <FilterButton name="all"/>
        <FilterButton name="active"/>
        <FilterButton name="completed"/>

      </div>

      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );

}

export default App;

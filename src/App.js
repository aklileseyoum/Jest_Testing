import { useDispatch } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { AddTodoAction } from './actions/TodoActions';
import TaskList from './TaskList';

function App() {
  const[todo, setTodo] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  }

  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h2>TO-DO LIST APP</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder='Enter task'
          style = {{
            width: 350,
            padding: 10,
            borderRadius: 20,
            border: '1px solid rgb(65, 27, 27)',
            fontSize: 20,
            color: 'rgb(65, 27, 27)',
          }} 
          onChange={(e) => setTodo(e.target.value)}
          data-testid="my-input"
          />
          <button type='submit'
          style={{
            padding: 12,
            borderRadius: 25,
            fontSize: 20,
            marginLeft: 20,
            border: '1px solid rgb(65, 27, 27)',
            backgroundColor: 'rgb(65, 27, 27)',
            color: 'white',
          }}
          data-testid="btn"
          >Go</button>
        </form>
        <TaskList/>
      </header>
    </div>
  );
}

export default App;

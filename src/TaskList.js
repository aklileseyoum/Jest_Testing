import { useDispatch, useSelector } from 'react-redux';
import { RemoveTodoAction } from './actions/TodoActions';
import './App.css';

export default function TaskList () {
    const Todo = useSelector((state) => state.Todo);
    const { todos } = Todo;
    const dispatch = useDispatch();

    const removeHandler = (t) => {
        dispatch(RemoveTodoAction(t));
      }
    

    return (
        <ul className='tasklists'>
          {todos &&
            todos.map((t) => (
              <li key={t.id} className='lists'>
                <span className='todo'>{t.todo}</span>
                <button 
                onClick={() => removeHandler(t)}
                style={{
                    borderRadius: 25,
                    padding: 10,
                    border: "1px solid white",
                    color: "rgb(65, 27, 27)",
                    backgroundColor: "antiquewhite",
                }}
                data-testid="delete-btn"
                >Delete</button>
              </li>
            )) 
          }
        </ul>
    );
}
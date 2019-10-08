import React, { useReducer } from 'react';
import Todos from './components/Todos'
import { intitialState, reducer, ADD_TODO, formTodo, INPUT_FEILD, reducer2, CLEAR, STAGED, DELETE } from './reducer/reducer';

function App () {
  //const [todos, setTodo] = useState([])
  //const [formTodo, setformTodo] = useState('')

  const [todos, dispatch] = useReducer(reducer, intitialState);
  const [formValue, dispatch2] = useReducer(reducer2, formTodo)

  const handleChange = event => {
    debugger
    //setformTodo(event.target.value)
    dispatch2({type: INPUT_FEILD, payload: event.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      item: formValue,
      completed: false,
      id: Date.now()
    }
    //setformTodo('')
    
    dispatch({type: ADD_TODO, payload: todo})
    
    dispatch2({type: CLEAR})

    localStorage.setItem('items', JSON.stringify(todos))
  }

  const handleStaged = (obj) => {
    debugger
    dispatch({type: STAGED, payload: obj})
    console.log(obj)
  }

  const handleClear = (todos) => {
    //const results = todos.filter((el) => el.completed !== true);
    debugger
    dispatch({type: DELETE, payload: todos})
    //setTodo({todos: results})

  }

  // this component is going to take care of state, and any change handlers you need to work with your state
    const data = JSON.parse(localStorage.getItem('items'))
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <Todos todos={todos} 
                formTodo={formTodo} 
                handleSubmit={handleSubmit} 
                handleChange={handleChange} 
                handleStaged={handleStaged} 
                handleClear={handleClear}
                data={data}
                formValue={formValue} />
      </div>
    );
}

export default App;

import React from 'react';
import { ADD_TODO } from '../reducer/reducer'

export default function Todos (props) {
    
        const { todos, handleChange, handleSubmit, formTodo, handleStaged, handleClear, data, formValue } = props;
        debugger
        return (
            <div>
                {todos.map(item => (
                    <div onClick={() => {debugger; handleStaged(item)}} key={item.id}>
                        {item.item}
                    </div>
                ))}
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={formValue} />
                    <button type='submit' >Add Todo</button>
                    <button type='button' onClick={() => handleClear(todos)} >Clear Completed</button>
                </form>
                
            </div>
        )
}
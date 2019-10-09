import React from 'react'

export default function Form (props) {

    const { todos, handleChange, handleSubmit, formTodo, handleClear } = props;

    return (
        <form onSubmit={handleSubmit} >
            <input onChange={handleChange} value={formTodo} />
            <button type='submit' >Add todo</button>
            <button type='button' onClick={() => handleClear(todos)} >Clear Completed</button>
        </form>
    )
}
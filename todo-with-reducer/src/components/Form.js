import React, { useReducer } from 'react'
import { ON_INPUT_CHANGE, reducer, intitialState } from '../reducer/reducer'

export default function Form () {
    const [formValues, dispatch] = useReducer(reducer, intitialState)

    const handleChange = event => {
        dispatch({
            type: ON_INPUT_CHANGE,
            payload: { value: event.target.value },
        })
    }

    return (
        <form >
            <input onChange={handleChange} values={formValues} />
            <button type='submit' >Add todo</button>
        </form>
    )
}
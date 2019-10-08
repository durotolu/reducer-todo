import React, { useReducer } from 'react';
import { reducer, intitialState } from "../reducer/reducer";

export default function Todos () {
    const [state, dispatch] = useReducer(reducer, intitialState)

    return (
        <div>
            {state.todos.map((item) => item.item)}
        </div>
    )
}
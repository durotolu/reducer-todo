import Todos from "../components/Todos";

export const intitialState= [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589,
}]

export const formTodo= ''

export const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';
export const ADD_TODO = 'ADD_TODO';
export const INPUT_FEILD = 'INPUT_FEILD';
export const CLEAR = 'CLEAR';
export const STAGED = 'STAGED';
export const DELETE = 'DELETE';


export function reducer(state, action) {
    debugger
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.payload)
        case DELETE:
            return action.payload.filter((el) => el.completed !== true)
        case STAGED:
            return state.map((el) => el.id === action.payload.id ? !el.completed : null ) //...action.payload, completed: true}
        default:
            return state
    }
}

export function reducer2(state, action) {
    switch (action.type) {
        
        case INPUT_FEILD:
            return action.payload
        case CLEAR:
            return ''
        default:
            return state
    }
}

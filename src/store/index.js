import { configureStore } from '@reduxjs/toolkit';


const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';


export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: { text }
});

export const toggleTodo = (index) => ({
    type: TOGGLE_TODO,
    payload: { index }
});

export const deleteTodo = (index) => ({
    type: DELETE_TODO,
    payload: { index }
});


const initialState = {
    todos: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { text: action.payload.text, completed: false }]
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index === action.payload.index ? { ...todo, completed: !todo.completed } : todo
                )
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo, index) => index !== action.payload.index)
            };
        default:
            return state;
    }
};


export const store = configureStore({
    reducer: {
        todos: reducer
    }
});

export default store;

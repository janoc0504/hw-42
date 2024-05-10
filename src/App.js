import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './store';
import './App.css';

function App() {
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const todoInput = event.target.elements.todoInput;
        const todoText = todoInput.value.trim();
        if (todoText) {
            dispatch(addTodo(todoText));
            todoInput.value = '';
        }
    };

    const handleToggleTodo = (index) => {
        dispatch(toggleTodo(index));
    };

    const handleDeleteTodo = (index) => {
        dispatch(deleteTodo(index));
    };

    return (
        <div className="App">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <div key={index} className="todo-item-container">
                        <div
                            className={todo.completed ? "todo-item completed" : "todo-item"}
                            onClick={() => handleToggleTodo(index)}
                        >
                            {todo.text}
                        </div>
                        <button className="delete-button" onClick={() => handleDeleteTodo(index)}>
                            Delete Todo
                        </button>
                    </div>
                ))}
            </div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="todoInput" placeholder="Enter todo" />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}

export default App;

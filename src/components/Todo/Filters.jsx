import { useState, useEffect } from 'react';

export default function Filters({ todos, setTodos, filtered, setFilter }) {

    const [all, setAll] = useState(true);
    const [completed, setCompleted] = useState(false);
    const [active, setActive] = useState(false);
    useEffect(() => {
        if (all) {
            setFilter(todos);
        }
        if (completed) {
            setFilter(todos.filter((item) => item.isComplete))
        }
        if (active) {
            setFilter(todos.filter((item) => !item.isComplete))
        }
    }, [all, completed, active, todos, setFilter]);

    const clearCompleted = () => {
        var clearTodos = todos.filter((item) => !item.isComplete);
        setTodos(clearTodos);
    };
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{filtered.length}</strong> items left
            </span>

            <ul className="filters">
                <li>
                    <a className={`${all ? "selected" : ""}`} onClick={() => (setAll(true), setCompleted(false), setActive(false))}>All</a>
                </li>
                <li>
                    <a className={`${active ? "selected" : ""}`} onClick={() => (setAll(false), setCompleted(false), setActive(true))}>Active</a>
                </li>
                <li>
                    <a className={`${completed ? "selected" : ""}`} onClick={() => (setAll(false), setCompleted(true), setActive(false))}>Completed</a>
                </li>
            </ul>
            {filtered.some(e => e.isComplete) && (
                <button className="clear-completed" onClick={clearCompleted}>
                    Clear completed
                </button>
            )}
        </footer>
    );
}
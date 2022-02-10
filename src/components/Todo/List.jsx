import React from 'react';

export default function List({ todos, setTodos, filtered }) {

    function HandleChecked(item, value) {
        var copy = [...todos];
        copy[copy.indexOf(item)].isComplete = value;
        setTodos(copy);
    };
    function HandleCheckAll(value){
        var copy = [...todos];
        copy.map((item)=>{
            item.isComplete = value;
        });
        setTodos(copy);
    }
    function clear(selected) {
        setTodos(
            todos.filter((item) => {
                return item !== selected;
            })
        )
    }
    return (
        <section className="main">
            <input 
            id='toggleAll'
            className="toggle-all" 
            type="checkbox" 
            onChange={(e) => HandleCheckAll(e.target.checked)}/>
            <label htmlFor="toggleAll">
                Mark all as complete
            </label>

            <ul className="todo-list">
                {
                    filtered.map((item, index) => (
                        <li key={index} className={item.isComplete ? "completed" : ""}>
                            <div className="view">
                                <input
                                    className="toggle"
                                    type="checkbox"
                                    checked={item.isComplete}
                                    onChange={(e) =>HandleChecked(item,e.target.checked)}
                                />
                                <label>{item.todoName}</label>
                                <button className="destroy" onClick={() => clear(item)}></button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}

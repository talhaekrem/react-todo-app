import { useState } from 'react';
import './App.css';
import Form from './components/Todo/Form';
import List from './components/Todo/List';
import Filters from './components/Todo/Filters';

function App() {
  const [todos, setTodos] = useState([
    { todoName: "do homework", isComplete: false },
    { todoName: "wash dishes", isComplete: true },
    { todoName: "cooking", isComplete: true },
    { todoName: "walk", isComplete: false }
  ]);
  const [filtered, setFiltered] = useState([]);
  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <Form addTodo={setTodos} todos={todos} />
        </header>
        <List todos={todos} setTodos={setTodos} filtered={filtered} />
        <Filters todos={todos} setFilter={setFiltered} filtered={filtered} setTodos={setTodos} />
      </section>
      <footer className="info">
        <p>Click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </>
  );
}

export default App;

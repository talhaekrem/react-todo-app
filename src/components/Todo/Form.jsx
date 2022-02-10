import {useEffect, useState} from 'react';

const InitialValues = { todoName: "", isComplete: false }
export default function Form({addTodo, todos}) {
    const [form, setForm] = useState(InitialValues);
    useEffect(() => {
        setForm(InitialValues);
    }, [todos]);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (form.todoName === "") {
            return false;
        }
        addTodo((prevState) => [...prevState, form]);
    }
    return (
        <form onSubmit={onSubmit}>
            <input 
            className="new-todo" 
            placeholder="What needs to be done?" 
            autoFocus
            type="text"
            name='todoName'
            value={form.todoName} 
            onChange={onChangeInput}
            />
        </form>
    );
}

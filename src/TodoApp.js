import React, { useState } from 'react'
import { useForm } from './hooks/useForm';

export const TodoApp = () => {

    const [todos, setTodos] = useState([]);


    const [ { desc }, handleInputChange, reset ] = useForm({
        desc: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc
        }
        setTodos([ ...todos, newTodo ]);
        reset();
    };



    return (
        <div className="page">
            <form onSubmit={ handleSubmit }>
                <input 
                    className="item-list"
                    type="text"
                    value={ desc }
                    onChange={ handleInputChange }
                    name="desc"
                />
                <hr />
            </form>
            {
                todos.map( (todo) => (
                    <>
                        <div 
                            key={ todo.id }
                            className="item-list">
                                { todo.desc }
                        </div>
                        <hr />
                    </>
                ))
            }

        </div>
    )
}

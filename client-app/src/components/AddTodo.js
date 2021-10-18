import React, { useState } from 'react'

function AddTodo() {
    const [input, setInput] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        setInput('');
    }

    function handleInputChange(e){
        setInput(e.target.value);
    }

    return (
        <form className='AddTodo' onSubmit={handleSubmit}>
            <input type='text' placeholder='Add Todo' value={input} name='Todo Item' onChange={handleInputChange}></input>
            <button type='submit'>Add todo</button>
        </form>
    )
}

export default AddTodo

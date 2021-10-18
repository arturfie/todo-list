import React, {useState, useEffect} from 'react'
import axios from 'axios';

function TodoList() {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/api/todo').then(response => {
        setTodoList(response.data);
      });
    }, []);

    return (
        <div className='TodoList'>
            {todoList.map((todo) =>(
                <p>{todo}</p>
            ))}
        </div>
    )
}

export default TodoList

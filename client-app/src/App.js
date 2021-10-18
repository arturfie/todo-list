import React, {useEffect, useState} from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="App">
      <h1>Todo List Application</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;

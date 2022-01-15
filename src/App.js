import React, { useEffect, useState } from 'react';
import './App.css';
//importing components
import Form from './components/form';
import Lists from './components/lists';

function App() {

  const [text, setText] = useState(''); 
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getTodosFormLocalstorage()
  },[])

  useEffect(() => {
    filterHandler()
    addToLocalStorage()
  },[status, todos]);

  const filterHandler = () => {
      switch (status) {
        case "complete":
          setFilteredTodos(todos.filter(todo => todo.complete === true))
          break;
        case "uncomplete":
          setFilteredTodos(todos.filter((todo) => todo.complete === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
  }
  const addToLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getTodosFormLocalstorage = () => {
    const todosStringFormLocalstorage = localStorage.getItem('todos');
    const todosFormLocalstorage = JSON.parse(todosStringFormLocalstorage);
    setTodos(todosFormLocalstorage);
  }

  return (
    <div className="App">
        <Form setText={setText} text={text} todos={todos} setTodos={setTodos} setStatus={setStatus}/>
        <Lists todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;

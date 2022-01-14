import React from 'react';
import '../css/lists.css'

function List({text, todo, todos, setTodos}) {

  const deleteHandler = () => {
    setTodos(todos.filter(item => (
      item.id !== todo.id
    )))
  }

  const completeHandler = () => {
    setTodos(todos.map(item => {
      if(item.id === todo.id) {
        console.log(todo)
        return { ...item, complete: !item.complete}
      }
      return item;
    }))
  }

  return (
        <div className="list">
            <div className={`text ${todo.complete ? 'completed' : ''}`}>{text}</div>
            <i onClick={completeHandler} className="fas fa-check"></i>
            <i onClick={deleteHandler} className="fas fa-trash-alt"></i>
        </div>
  );
}

export default List;
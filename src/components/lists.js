import React from 'react';
import '../css/lists.css'
//importing components
import List from './list';

function Lists({todos, setTodos, filteredTodos}) {
  return (
        <div className="listContainer">
            <ul>
              {filteredTodos && filteredTodos.map(todo =>(
                <List text={todo.text} setTodos={setTodos} todos={todos} todo={todo} key={todo.id}/>
              ))}
            </ul>
        </div>
  ); 
}

export default Lists;
import React from 'react';
import '../css/form.css'

function Form({setText, text, setTodos, todos, setStatus}) {

  const updateText = (e) => {
    setText(e.target.value);
  }

  const addToList = (e) => {
    e.preventDefault()
    setTodos(
      [...todos, {text: text, complete: false, id: Math.random() *100}]
    )
  }

  const updateStatus = (e) => {
    setStatus(e.target.value);
  }

  return (
    <div>
      <h1 className='header'>TODOLIST</h1>
        <div className="formAndSelect">
          <form >
            <div className="inputContainer">
                <input onChange={updateText}  value={text} className='common' type="text" />
                <button onClick={addToList} className='common'>+</button>
            </div>
          </form>
          <select className='common' onChange={updateStatus}>
            <option value="all">All</option>
            <option value="uncomplete">Uncomplete</option>
            <option value="complete">Complete</option>
          </select>
        </div>
    </div>
  );
}

export default Form;
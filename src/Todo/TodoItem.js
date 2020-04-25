import React from 'react'

function TodoItem({todo, index, doneTodo, removeTodo}){
    const classes = [];

    if(todo.completed){
        classes.push('done');
    }

    return(
        <li className="style-li" >
            <span className={classes.join(' ')} >
                <input className="input-style" type="checkbox" checked={todo.completed}
                onChange={() => doneTodo(todo.id)} />
                <strong className="strong-style" >{index+1}</strong>
                {todo.title}
                </span>
                <button className="button-style" onClick={() => removeTodo(todo.id) } >&times;</button>
            </li>
    )
}

export default TodoItem;
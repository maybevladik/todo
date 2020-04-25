import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props){
    return(
        <ul className="ul-styles" >
            {props.todos.map((todo, index) => {
                return <TodoItem todo={todo} index={index} key={todo.id} doneTodo={props.doneTodo} 
                removeTodo={props.removeTodo} />
            })}
            </ul>
    )
}

export default TodoList;
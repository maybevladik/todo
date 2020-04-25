import React, { Component } from 'react'
import TodoList from './Todo/TodoList'
import AddTodo from './Todo/AddTodo'
import {connect} from 'react-redux'
import { AddTask, CompleteTask, DeleteTask } from './Action/ActionTasks'

class App extends Component {

    AddTask = (title) => {
        const {AddTask} = this.props;
        AddTask((new Date()).getTime(), false, title);
    }   
    
    render(){

        const { tasks, CompleteTask, DeleteTask } = this.props;
     
        return(
            <div className="wrapper">
            <h1>Список задач - Влад</h1>
            <AddTodo onCreate={this.AddTask} />
            {tasks.length ? <TodoList todos={tasks} doneTodo={CompleteTask} removeTodo={DeleteTask} /> :
            <p className='notTasks' >Список пуст<img src='Emodji.png' className='emj-img' /></p>}
            </div>
        );
    }
}
export default connect (
    state => ({
        tasks: state
    }), 
    { AddTask, CompleteTask, DeleteTask },
)(App); 
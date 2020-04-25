import {createStore} from 'redux';

const TASKS = [
    {
      id: 1, 
      completed: false,
       title: 'Покормить собаку'
     },
    {
      id: 2, 
      completed: true, 
      title: 'Вынести мусор'
    },
    {
      id: 3, 
      completed: false, 
      title: 'Приготовить обед'
    },
    {
      id: 4, 
      completed: false, 
      title: 'Сходить в кино'
    }
]

function task(state= TASKS, {id, completed, title, type} ){
  switch(type){
    case 'ADD_TASK' :
      return[
          ...state, {
          id,
          completed,
          title,
        }
      ];
      case 'DELETE_TASK':
        return [...state].filter(todo => todo.id !== id);
      case 'COMPLETE_TASK':
        return [...state].map(todo => {
          if(todo.id === id ){
            todo.completed = !todo.completed;
          }
          return todo;
        });
        default:
        return state;
    }
}

const store = createStore(task);

export default store;
import React, {useState} from 'react'

function AddTodo({onCreate}){
    const [value, setValue] = useState('');

    function submitHandler(event){
        event.preventDefault();
        console.log('1');
        if(value.trim()){
            onCreate(value);
            setValue('');
        }
    }

    return(
        <form className="add_form-style" onSubmit={submitHandler} >
            <input className="add_input-style" placeholder="Введите название задачи"
            value={value} onChange={event => setValue(event.target.value) } />
            <button type="submit" className="add_button-style" >Добавить задачу</button>
            </form>
    )
}

export default AddTodo;
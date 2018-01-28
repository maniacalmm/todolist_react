import React from 'react';
import './TodoItem.css';

const TodoItem = ({_id, name, completed, deleteTodo, updateTodo}) => { 
    let style = {textDecoration: completed? 'line-through' : 'none',
                color: completed? '#cbd0d8' : 'black'};
    return (
            <li >
                <span 
                    style={style}
                    onClick={() => {updateTodo(_id, completed)}}> 
                    {name} 
                </span>
                <span className='delete-btn' onClick={() => {deleteTodo(_id)}}> X </span>
            </li>
    )
};

export default TodoItem;
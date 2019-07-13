import React from 'react';

function TodoItem(props) {
    return <div>
        <button>{props.item.completed ? "X" : "O" }</button> {props.item.name} 
        <br />
    </div>
}

export default TodoItem;
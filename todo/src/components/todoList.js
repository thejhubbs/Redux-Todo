import React from 'react';
import {connect} from 'react-redux';
import TodoItem from './todoItem';

function TodoList(props) {
    const { todoItems } = props

    return todoItems.map(item => 
        <TodoItem key={item.name} item={item} />
    )
}

const mapStateToProps = (state) => {
    return {
        todoItems: state.todoItems 
    }
}

export default connect(
    mapStateToProps
)(TodoList);
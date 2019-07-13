import React from 'react';
import {connect} from 'react-redux'
import {toggleItem} from '../actions'

function TodoItem(props) {
    const addItems = (e) => {
        props.toggleItem( props.item )
    }

    return <div>
        <button onClick={addItems} >{props.item.completed ? "X" : "O" }</button> {props.item.name} 
        <br />
    </div>
}

const mapStateToProps = (state) => {
    return {todoItems: state.todoItems}
}

const mapDispatchToProps = {
    toggleItem: toggleItem
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
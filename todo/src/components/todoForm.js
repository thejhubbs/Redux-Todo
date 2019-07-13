import React from 'react';
import { connect } from 'react-redux'
import { addItem } from '../actions'

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
    }

    addTodo = (e) => {
        e.preventDefault();
        const newName = e.target.name.value
        this.props.addItem(newName)
        this.setState({name: ''})
    }


    handleChange = (e) => {
        this.setState({name: e.target.value})
    }

    render() {
        return <form onSubmit={this.addTodo}>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            <button type='submit'>Add New Item</button>
        </form>
    }
}

const mapStateToProps = (state) => { return { todoItems: state.todoItems } }

const mapDispatchToProps = {
	addItem: addItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
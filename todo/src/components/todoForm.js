import React from 'react';

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
    }

    render() {
        return <form>
            <input type="text" />
            <button type='submit'>Add New Item</button>
        </form>
    }
}

export default TodoForm;
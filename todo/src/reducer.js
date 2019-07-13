import { ADD_ITEM, TOGGLE_ITEM } from './actions'

const initialState = {
    todoItems: [
        {
        name: "Walk the dog",
        completed: true
        },
        {
        name: "Feed the cat",
        completed: false
        }
    ],
}

export default function(state = initialState, action) {
	switch (action.type) {
		case ADD_ITEM: {
			const { name } = action.payload
			const newItems = state.todoItems.concat([ { name, completed: false } ])
			
			return {
				...state,
				todoItems: newItems,
			}
        }
        case TOGGLE_ITEM: {
			const { name } = action.payload
			const newItems = state.todoItems.concat([ { name, completed: false } ])
			
			return {
				...state,
				todoItems: newItems,
			}
        }
		
		default:
			return state
	}
}
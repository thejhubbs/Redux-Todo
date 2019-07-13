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
		}],
}

export default function(state = initialState, action) {
	console.log(action)
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
			const referenceName = action.payload.name
			const oldCompleted = action.payload.completed
			//Copy over the todoItems for immutability
			var newItems = { ...state.todoItems }
			//Filter out except for name, and just add a new one with the opposited of oldCompleted
			newItems = newItems.filter( name => name !== referenceName ).concat([ { name: referenceName, completed: !oldCompleted } ])
			
			return {
				...state,
				todoItems: newItems,
			}
        }
		
		default:
			return state
	}
}
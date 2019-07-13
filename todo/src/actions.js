export const ADD_ITEM = 'ADD_ITEM'
export const TOGGLE_ITEM = 'TOGGLE_ITEM'

export function addItem(name) {
	return {
		type: ADD_ITEM,
		payload: {
			name
		}
	}
}

export function toggleItem(name) {
	return {
		type: TOGGLE_ITEM,
		payload: {
			name
		}
	}
}
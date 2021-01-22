import { init } from 'svelte/internal';
import { createReducer } from '../store';

const initialState = {
	articles: []
}

const actions = {
	'ADD_ARTICLE': addArticle
}

function addArticle(state, action) {
	return {
		articles: [...state.list, action.payload]
	}
}

export default createReducer(initialState, actions);
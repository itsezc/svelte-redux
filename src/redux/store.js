import { createStore, combineReducers, applyMiddleware } from 'redux';

export const createReducer = (initialState, handlers) => {
    return (state = initialState, action) => {
        return (handlers[action.type] && handlers[action.type](state, action)) || state;
    }
}

const rootReducer = combineReducers({
    articles: articleReducer,
})

export const store = createStore(rootReducer, {});
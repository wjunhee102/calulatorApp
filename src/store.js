import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = text => {
    return {
        type: ADD,
        text
    }
};

const deleteToDo = id => {
    return {
        type: DELETE,
        id : parseInt(id)
    }
}

const reducer = (state = [], action) => {
    switch(action.type) {
        case ADD :
            const newToDos = { text: action.text, id: Date.now()}
            return [newToDos, ...state];
        case DELETE :
            return state.filter(toDo => toDo.id !== action.id);
        default :
            return state;
    }
};


const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const actionCreators = {
    addToDo,
    deleteToDo
};


export default store;
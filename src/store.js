import { createStore } from "redux";

// const ADD = "ADD";
// const DELETE = "DELETE";

// const addToDo = text => {
//     return {
//         type: ADD,
//         text
//     }
// };

// const deleteToDo = id => {
//     return {
//         type: DELETE,
//         id : parseInt(id)
//     }
// }

// const reducer = (state = [], action) => {
//     switch(action.type) {
//         case ADD :
//             const newToDos = { text: action.text, id: Date.now()}
//             return [newToDos, ...state];
//         case DELETE :
//             return state.filter(toDo => toDo.id !== action.id);
//         default :
//             return state;
//     }
// };


// const store = createStore(reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export const actionCreators = {
//     addToDo,
//     deleteToDo
// };


// export default store;

const CalcEle = {
    add : "add",
    cancle : "cancle",
    allCancle : "all-cancle",
    trans : "trans",
    per : "per",
    divi : "division",
    multiply : "multiply",
    minus : "minus",
    plus : "plus"
}

const addNum = num => {
    return {
        type : CalcEle.add,
        num
    }
}

const allcancle = ()=> {
    return {
        type : CalcEle.allCancle
    }
}

const reducer = (state, action) => {

    const { add, cancle , allCancle,  trans, per, divi, multiply, minus, plus} = CalcEle;

    switch(action.type) {
        case  add :
            // const newNumber = { num : state.num ?(state.num*10 + action.num):(action.num)   , id: Date.now() }
            const newNumber = { num : action.num , id : state[state.length-1].id + 1 }
            return [...state, newNumber]
        case allCancle :
            const newRes = {num : action.num , id : state[state.length-1].id + 1}
            return [...state, newRes]
        default :
            state = [{
                num : 0,
                id : 0
            }]
            return state;
    }
}

const store = createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const actionCreators = {
    addNum,
    allcancle 
}

export default store;
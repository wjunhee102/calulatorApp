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
    factor : "factor",
    reset : "reset"
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

const resetAction = reset => {
    return {
        type : CalcEle.reset,
        reset
    }
}

const factorAction = (factorOn, operType) => {
    return {
        type : CalcEle.factor,
        factorOn,
        operType
    }
}




const reducer = (state, action) => {

    const { add, cancle , allCancle, factor, reset} = CalcEle;

    switch(action.type) {
        case  add :
            const newNumber = Object.assign({}, state[state.length -1],{
                num : action.num, 
                id : state[state.length-1].id + 1
            });
            return [...state, newNumber]
        case allCancle :
            const newRes = Object.assign({}, state[state.length -1], {
                num : action.num, 
                id : state[state.length-1].id + 1
            });
            return [...state, newRes]
        case reset : 
            const newReset = Object.assign({}, state[state.length -1], {
                reset : action.reset,
                id : state[state.length-1].id + 1 
            }); 
            return [...state, newReset]
        case factor : 
            const newFactor = Object.assign({}, state[state.length -1], {
                factorOn : action.factorOn, 
                operType : action.operType,
                id : state[state.length-1].id + 1 
            }); 
            return [...state, newFactor]
        default :
            state = [{
                num : 0,
                id : 1,
                reset : false,
                factorOn : false,
                operType : null
            }]
            return state;
    }
}

const store = createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const actionCreators = {
    addNum,
    allcancle,
    factorAction,
    resetAction
}

export default store;
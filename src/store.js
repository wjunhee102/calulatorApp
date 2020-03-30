import { createStore } from "redux";

const CalcEle = {
    add : "add",
    factor : "factor",
    reset : "reset",
    allReset : "allReset"
}

const addNum = num => {
    return {
        type : CalcEle.add,
        num
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

const allReset = (reset, factorOn, operType, num) => {
    return {
        type : CalcEle.allReset,
        reset,
        factorOn,
        operType,
        num
    }
}

const reducer = (state, action) => {

    const { add, factor, reset, allReset} = CalcEle;

    switch(action.type) {
        case  add :
            const newNumber = Object.assign({}, state[state.length -1],{
                num : action.num, 
                id : state[state.length-1].id + 1
            });
            return [...state, newNumber]
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
        case allReset :
            const newAllReset = Object.assign({}, state[state.length -1], {
                reset : action.reset,
                factorOn : action.factorOn,
                operType : action.operType,
                num : action.num,
                id : state[state.length-1].id + 1
            });
            return [...state, newAllReset]
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
    factorAction,
    resetAction,
    allReset
}

export default store;
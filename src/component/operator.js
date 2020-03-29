import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const oper = [
    {
        type : "division",
        text : "/"
    },
    {
        type : "multiply",
        text : "*"
    },
    {
        type : "minus",
        text : "-"
    },
    {
        type : "plus",
        text : "+"
    }, 
    {
        type : "count",
        text : "="
    }
]


function OperBtn({name, text, click}) {
    return (
        <button
            onClick={()=>{
                click(name);
            }}
            type="button" 
            className={`oper ${name}`}>
            {text}
        </button>
    )
}

function Operator({factorClick, state, resetAction, res, setRes, addClick}) {

    const count = type =>{
        let factorOn, operType;
        resetAction(true);

        switch(type) {
            case "plus" :
                operType = type;
                factorOn = true;
                break;
            case "minus" :
                operType = type;
                factorOn = true;
                break;
            case "multiply" :
                operType = type;
                factorOn = true;
                break;
            case "division" :
                operType = type;
                factorOn = true;
                break;
            default :
                operType = null;
                factorOn = false;
        }
        
        if(state[state.length -1].operType && !state[state.length -1].reset) {
            let res1 = state[state.length -1].num;
            let res2 = Number(res.join(""));
            let value;
            switch(state[state.length -1].operType) {
                case "plus" : 
                    value = res1 + res2;
                    break;
                case "minus" :
                    value = res1 - res2;
                    break;
                case "multiply" :
                    value = res1 * res2;
                    break;
                case "division" :
                    value = res1 / res2;
                    break;
                default :
                    value = res2;
                    return
            }
            if(operType){
                factorOn = false;
            } 
            if(value) {
                setRes([value]);
                addClick(value);
            }
        } else {
            addClick(Number(res.join("")));
        }
        console.log(operType);
        factorClick(factorOn, operType);
    }

    return (
        <div className="operator">
            {oper.map((ele, idx)=>(
                <OperBtn 
                    name={ele.type}
                    text={ele.text}
                    key={idx}
                    click={count}
                />
            ))}
        </div>
    )
}

function mapStateToProps(state){
    return {
        state : state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        factorClick: (factorOn, operType) => dispatch(actionCreators.factorAction(factorOn, operType)),
        // resetAction: reset => dispath(actionCreators.resetAction(reset))
        resetAction: reset => dispatch({type : "reset",reset : reset}),
        addClick : num => dispatch(actionCreators.addNum(num))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Operator);
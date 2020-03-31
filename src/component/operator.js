import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const oper = [
    {
        type : "division",
        text : "/"
    },
    {
        type : "multiply",
        text : "X"
    },
    {
        type : "minus",
        text : "ㅡ"
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

function OperBtn({name, text, click, onOff}) {
    const [ on, setOn ] = useState("");

    useEffect(()=> {
        if(name === onOff) {
            setOn("on")
        } else {
            setOn("")
        }      
    },[onOff, name])

    return (
        <button
            onClick={()=>{
                click(name);
            }}
            type="button" 
            className={`oper ${name} ${on}`}>
            <span>{text}</span>
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
        
        if(state.operType && !state.reset) {
            let res1 = state.num;
            let res2 = Number(res.join(""));
            let value;
            switch(state.operType) {
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
                setRes([value]);
                addClick(value);
        } else {
            addClick(Number(res.join("")));
        }
        factorClick(factorOn, operType);
    }

    return (
        <div className="operator">
            {oper.map((ele, idx)=>(
                <OperBtn 
                    onOff={state.operType}
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
        state : state[state.length -1]
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
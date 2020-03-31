import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function FuncBtn({click, type, text}) {
    return (
        <button 
            type="button"
            className={`funcBtn ${type}`} 
            onClick={()=>(
                click(type)
            )}
        >
            <span>{text}</span>
        </button>
    )
}

const funcKinds = [
    {
        type : "trans",
        text : "+/-"
    },
    {
        type : "per",
        text : "%"
    }
]

function Func({ result, setRes, addClick, state, allReset }) {
    const [ on, setOn ] = useState("AC");

    const funcClick = type => {

        let value = Number(result.join(""));

        switch(type) {
            case "trans" :
                if(!value) return
                setRes([-value]);
                addClick(-value);
                break;
            case "per" :
                if(!value) return
                setRes([value/100])
                addClick(value/100);
                break;
            default :
                setRes(["오류"]);
        }

        
    }

    const cancleBtn = () => {
        console.log(result);
        setRes([]);
        if(!result[0]) {
            allReset(false , false, null, 0);
        }
    }

    useEffect(()=>{
        if(result[0] || state.num || state.operType) {
            setOn("C")
        } else {
            setOn("AC")
        }
    },[state.num, result, state.operType])

    return (
        <div className="func">
            <button 
                type="button"
                className={`funcBtn cancle`} 
                onClick={cancleBtn}>
                <span>{on}</span>
            </button>
            
            {funcKinds.map((ele, idx) =>(
                <FuncBtn 
                    type={ele.type}
                    click={funcClick}
                    text={ele.text}
                    key={idx}
                />
            ))}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        state : state[state.length -1]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addClick : num => dispatch(actionCreators.addNum(num)),
        allReset : (reset, factorOn, operType, num) => dispatch(actionCreators.allReset(reset, factorOn, operType, num))
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Func);
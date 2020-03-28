import React from "react";
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
            {text}
        </button>
    )
}

const funcKinds = [
    { 
        type : "cancle",
        text : "AC"
    },
    {
        type : "trans",
        text : "+/-"
    },
    {
        type : "per",
        text : "%"
    }
]

function Func({ result, setRes, addClick }) {

    const funcClick = type => {

        let value = Number(result.join(""));

        switch(type) {
            case "cancle" :
                setRes([]);
                addClick(0);
                break;
            case "trans" :
                if(!value) return
                setRes([-value]);
                addClick(-value);
                break;
            case "per" :
                setRes([value/100])
                addClick(value/100);
                break;
            default :
                setRes(["오류"]);
        }

        
    }

    return (
        <div className="func">
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
        num : state.num
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addClick : num => dispatch(actionCreators.addNum(num))
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Func);
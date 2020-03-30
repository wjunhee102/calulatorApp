import React, { useState } from "react";
import NumberPad from "./numberpad";
import Func from "./func";
import Operator from "./operator";
import Record from "./record";
import './calc.css';
import { connect } from "react-redux";
import { actionCreators } from "../store";

const number = [ 9, 8, 7, 6, 5, 4, 3, 2, 1];

function Calc({num, resetAction}) {
    const [ res, setRes ] = useState([]);

    console.log(num);

    const numberClick = (x)=>{
        if(res && num[num.length -1].reset === false) {
            setRes([...res, x])
        } else {
            setRes([x]);
            resetAction(false);
        }
        
    }   

    const dotClick = ()=> {
        let value = Number(res.join(""));
        let valueFloor = Math.floor(value);
        if(value !== valueFloor || res[res.length-1] === ".") return
        setRes([...res, "."]);
    }


    return (
        <article className="calc">

            <Record setRes={setRes}/>

            <div className="resWindow">{res[0]?(res.map(ele=>(ele))):(0)}</div>
            <div className="calcBtn">
                <div className="numberBox">
                    <Func 
                        result={res}
                        setRes={setRes}
                    />
                    <div className="number">
                        {number.map(ele => (
                            <NumberPad
                                num={ele}
                                click={numberClick}
                                key={ele}
                            />
                        ))}
                        <button 
                            className="num numDot"
                            onClick={dotClick}
                        >.</button>
                        <button 
                            className="num num0"
                            onClick={()=>{
                                numberClick(0);
                            }}
                        >0</button>
                    </div>
                </div>
                <Operator 
                    res={res}
                    setRes={setRes} />
            </div>
 
        </article>
    )
}

function mapStateToProps(state) {
    return { num : state };
}

function mapDispatchToProps(dispatch) {
    return {
        resetAction : reset => dispatch(actionCreators.resetAction(reset))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calc);
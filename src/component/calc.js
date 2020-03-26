import React, { useState } from "react";
import NumberPad from "./numberpad";
import Func from "./func";
import './calc.css';
import { connect } from "react-redux";

const number = [ 9, 8, 7, 6, 5, 4, 3, 2, 1];


function Calc({num}) {
    const [ res, setRes ] = useState([]);

    const numberClick = (num)=>{
        setRes([...res,num])
    }   

    return (
        <article className="calc">

            <div className="resWindow">{res[0]? ( res.map(ele=>(ele)) ) : (0)}</div>
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
                    <button className="num num0">0</button>
                </div>
            </div> 
        </article>
    )
}

function mapStateToProps(state) {
    return { num : state };
}

export default connect(mapStateToProps)(Calc);
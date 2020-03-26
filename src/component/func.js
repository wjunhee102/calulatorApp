import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Cancle({res, cancle, setRes, num}) {
    return (
        <button className="cancle"
            onClick={()=>{
                cancle();
                setRes([])
            }}
        >
            AC
        </button>
    )
}

function Trans({res}) {
    return (
        <button className="trans">
            +/-
        </button>
    )
}

function Per({res}) {
    return (
        <button className="per">
            %
        </button>
    )
}


function Func({result, cancleClick, setRes, num}) {

    return (
        <div className="func">
            <Cancle res={result} cancle={cancleClick} setRes={setRes} num={num}/>
            <Trans res={result} />
            <Per res={result} />
        </div>
    )
}

function mapStateToProps(state) {
    return {num : state.num}
}

function mapDispatchToProps(dispatch) {
    return {
        cancleClick : ()=> dispatch(actionCreators.allcancle())
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Func);
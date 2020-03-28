import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function NumberPad({ num, click }) {
    return (
        <button 
        className={`num num${num}`} 
        onClick={()=>{
            click(num);
        }}>
            {num}
        </button>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        numBtnClick: num => dispatch(actionCreators.addNum(num))
    }
}

export default connect(null, mapDispatchToProps)(NumberPad);
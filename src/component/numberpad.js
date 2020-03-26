import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function NumberPad({ num, onBtnClick, click }) {
    
    return (
        <button 
        className={`num num${num}`} 
        onClick={()=>{
            onBtnClick(num);
            click(num);
        }}>
            {num}
        </button>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        onBtnClick: num => dispatch(actionCreators.addNum(num))
    }
}

export default connect(null, mapDispatchToProps)(NumberPad);
import React from "react";

function NumberPad({ num, click }) {
    return (
        <button 
        className={`num num${num}`} 
        onClick={()=>{
            click(num);
        }}>
            <span>{num}</span>
        </button>
    )
}

export default NumberPad;
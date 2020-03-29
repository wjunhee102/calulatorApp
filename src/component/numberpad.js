import React from "react";

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

export default NumberPad;
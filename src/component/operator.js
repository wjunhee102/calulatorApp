import React from "react";

const oper = [
    {
        type : "division",
        content : "/"
    },
    {
        type : "mutiply",
        content : "*"
    },
    {
        type : "minus",
        content : "-"
    },
    {
        type : "plus",
        content : "+"
    }
]

function operBtn({name, text}) {
    return (
        <button type="button" className={name}>
            {text}
        </button>
    )
}

function Operator() {
    return (
        <div className="operator">
            {oper.map()}
        </div>
    )
}
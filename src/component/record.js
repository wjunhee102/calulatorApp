import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Options({value}){
    console.log(value);
    return (
        <option value={value}>
            {value}
        </option>
    )
}

function useInput(defaultValue) {
    const [ value, setValue ] = useState(defaultValue);

    const onChange = e => {
        const {
            target : {value}
        } = e;
        setValue(value);
    };
    return { value, onChange }
}

function Record({state, allReset, setRes, allRemove}) {
    const [ recordValue, setRV ] = useState([0]);

    const selectChange = useInput(state);

    //확인할 것
    useEffect(()=>{
        const rValue = recordValue[recordValue.length -1];
        if(rValue !== state) {
            if(!rValue) {
                setRV([state])
            } else {
                setRV([...recordValue, state])
            }
        } 
    },[state])

    const timeMachine = ()=> {
        if(selectChange.value !== state) {
            if(selectChange.value === 0) {
                allReset(false, false, null, selectChange.value);
                setRes([]);
            } else {
                allReset(false, false, null, selectChange.value);
                setRes([selectChange.value]);
            }
        }
    }
    const allRemoveAction = ()=> {
        allRemove(false, false, null, 0);
        setRV([state]);
    }

    return (
        <div className="record">
            <select {...selectChange}>
                <option value={0}>계산 기록</option>
                {recordValue[0] ? (
                    recordValue.map((ele, idx)=>(
                        <Options 
                        value={ele}
                        key={idx}
                    />
                    ))
                ):(null)}
            </select>
            <button type="button" onClick={timeMachine}>값 불러오기</button>
            <button type="button" onClick={allRemoveAction}>기록 지우기</button>
            <div className="state">{state}</div>
        </div>
    )
}

function mapStateToProps(state) {
    return { state : state[state.length - 1].num
    }
}

function mapDispatchToProps(dispatch) {
    return {
        allReset : (reset, factorOn, operType, num) => dispatch(actionCreators.allReset(reset, factorOn, operType, num)),
        allRemove : (reset, factorOn, operType, num) => dispatch(actionCreators.allRemove(reset, factorOn, operType, num))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Record);
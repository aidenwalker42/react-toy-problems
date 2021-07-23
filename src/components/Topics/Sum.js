import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

export default function Sum() {
    let oneInputValue = useRef()
    let twoInputValue = useRef()
    let [state, setstate] = useState(0);
    function setInput(){
        let oneInput = oneInputValue.current.value;
        let twoInput = twoInputValue.current.value;
        oneInput = parseInt(oneInput);
        twoInput = parseInt(twoInput);
        state = setstate(oneInput+twoInput)
    }
    return (
        <div className="puzzleBox filterStringPB">
            <h4>Sum</h4>
            <input className="inputLine" ref={oneInputValue}></input>
            <input className="inputLine" ref={twoInputValue}></input>
            <button className="confirmationButton" onClick={setInput}>Confirm</button>
            <span className="resultsBox">Sum: {state}</span>
        </div>
    )
}

import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

export default function Palindrome() {
    let inputValue = useRef();
    let [state, setstate] = useState(null);
    function setInput(){
        let input = inputValue.current.value;
        let re = /[\W_]/g;
        let lowRegStr = input.toLowerCase().replace(re, '');
        let reverseStr = lowRegStr.split('').reverse().join('');
        if(lowRegStr === reverseStr){
            state = setstate("true")
        }
        else{
            state = setstate("false")
        }
        
    }
    return (
        <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input className="inputLine" ref={inputValue}></input>
            <button className="confirmationButton" onClick={setInput}>Confirm</button>
            <span className="resultsBox">Palindrome: {state}</span>
        </div>
    )
}

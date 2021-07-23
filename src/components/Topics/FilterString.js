import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

export default function FilterString() {
    const arr = [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ]
    let inputValue = useRef();
    let [state, setstate] = useState(null)
    function setInput(){
        let input = inputValue.current.value;
        let newArr = []
        for(let i=0; i<arr.length; i++){
            if(arr[i].includes(input)){
                newArr.push(arr[i]);
            }
        }
        newArr = newArr.toString()
        state = setstate(newArr)
    }
    return (
        <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">Names: [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ]</span>
            <input className="inputLine" ref={inputValue}></input>
            <button className="confirmationButton" onClick={setInput}>Filter String</button>
            <span className="resultsBox filterStringRB">[{state}]</span>
        </div>
    )
}

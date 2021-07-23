import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

export default function FilterObject() {
    let obj = [{ "name": "Jimmy Joe", "title": "Hack0r", "age": 12 },{ "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" },{ "name": "Carly Armstrong", "title": "CEO" }]
    let [state, setstate] = useState(null);
    let inputValue = useRef();

    function setInput(){
        let newObj = []
        let input = inputValue.current.value
        for(let i=0; i<obj.length; i++){
            if(obj[i][input]){
                newObj.push(obj[i])
            }
        }
        console.log(newObj)
        state = setstate(newObj)
    }
    return (
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">Original: {JSON.stringify(obj)}</span>
            <input className="inputLine" ref={inputValue}></input>
            <button className="confirmationButton" onClick={setInput}>Filter Object</button>
            <span className="resultsBox filterObjectRB">{JSON.stringify(state)}</span>
        </div>
    )
}

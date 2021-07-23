import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

export default function EvenAndOdd() {
    let [evenArr, setEvenArr] = useState(null)
    let [oddArr, setOddArr] = useState(null)
    let theInput = useRef();
    function setInput(){
        let input = theInput.current.value;
        let evens = [];
        let odds = [];
        const arr = input.split(",")
        arr.forEach(num => {
            if(num%2===0){
                evens.push(num)
            } else {
                odds.push(num)
            }
        })
        let newEvens = evens.toString();
        newEvens = newEvens.replace(/\s/g, '');
        let newOdds = odds.toString();
        newOdds = newOdds.replace(/\s/g, '');
        console.log(evens, odds)
        evenArr = setEvenArr(newEvens)
        oddArr = setOddArr(newOdds);
    }
    return (
        <div className="puzzleBox evenAndOddPB">
            <h4>Even and Odds</h4>
            <input className="inputLine" ref={theInput}></input>
            <button className="confirmationButton" onClick={setInput}>Filter Evens and Odds</button>
            <span className="resultsBox">Evens: [{evenArr}]</span>
            <span className="resultsBox">Odds: [{oddArr}]</span>
        </div>
    )
}

import React, {useState} from "react";
function Counter(){
    //useState( 상태초기값 )
    // const [number, setNumber] = useState(0);
    const stateArray = useState(0);
    console.log(stateArray);
    const number = stateArray[0];
    const setNumber = stateArray[1];
    const onIncrease = () => {
        setNumber(number + 1);
        console.log("+1", number);
    }
    const onDecrease = () => {
        setNumber(number - 1);
        console.log("-1", number);
    }
    return(
        <div>
            <h2>{number}</h2>
            <button onClick={onIncrease} >+1</button>
            <button onClick={onDecrease} >-1</button>
        </div>
    )
}
export default Counter;
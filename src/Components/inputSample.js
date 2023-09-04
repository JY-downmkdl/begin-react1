import React, { useState } from "react";

function InputSample(){
    //객체 형태로 관리하기
    const [inputs, setInputs] = useState({
        name: "",
        nickname: ""
    });

    //각각의 값을 구조분해할당으로 받을 수 있다.
    const {name, nickname} = inputs;

    const onChange = (e) => {
        // name : name/ nickname
        // value : 각 인풋 value 값
        const {name, value} = e.target;
        setInputs({
            //기존 객체 그대로 덮어씌우기
            ...inputs,

            // name 키를 가진 값을 value로 바꿈
            [name] : value
        })
        
    }
    const onReset = () =>{
        setInputs("");
    }
    return(
        <div>
            <input placeholder="이름" name="name" value={name} onChange={onChange}/>
            <input placeholder="닉네임" name="nickname" value={nickname} onChange={onChange} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}
export default InputSample;
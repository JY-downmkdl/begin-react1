import './App.css';
import UserList from './Components/UserList';
import InputSample from './Components/inputSample';
import Counter from './Components/Counter';
import Hello from './Hello';
import Wrapper from './Wrapper';
import { useRef, useState } from 'react';

function App() {
  const [statenum, setStateNum] = useState(1);
  const refnum = useRef(1);
  let  varnum = 1;
  const addStatNum = () => {
    setStateNum(statenum +1);
    console.log(statenum);
  }
  const addRefNum = () =>{
    refnum.current = refnum.current + 1 ;
    console.log(refnum.current);
  }
  const addVarNum = () =>{
    varnum = varnum + 1;
    console.log(varnum);
  }
  //
  const nameInput = useRef();
  const inputFoucus = () =>{
    nameInput.current.focus();
  }
  return (
    <div className='App'>
      <UserList/>
      <div>
          <p>
            <input name='name' ref={nameInput}/>
            <input name='nickname'/>
            <button onClick={inputFoucus}>클릭하세여</button>
          </p>
          <p>state : {statenum}</p>
          <p>ref : {refnum.current}</p>
          <p>varnum : {varnum} </p>
          <p>
              <button onClick={addStatNum}>state+1</button>
              <button onClick={addRefNum}>refnum+1</button>
              <button onClick={addVarNum}>varnum+1</button>
          </p>
      </div>
    </div>
  );
}
export default App;

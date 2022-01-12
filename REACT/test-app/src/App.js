import './App.css'
import { useState } from 'react'
import ClassComponent from './components/ClassComponent/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';
import ListComponent from './components/ListComponent/ListComponent';

function App() {

  const [inputText, setInputText] = useState(" ");

  return (
    <div className="App">

      <div className="inputAssignment">
      <ClassComponent inputText={inputText} setInputText={setInputText}/>
      <FunctionalComponent inputText={inputText} setInputText={setInputText}/>
      </div>
    <br>
    </br>
    <p>Enter a number:</p>
      <div className="keysAssignment">
        <ListComponent/>
      </div>
    </div>
  );
}

export default App;

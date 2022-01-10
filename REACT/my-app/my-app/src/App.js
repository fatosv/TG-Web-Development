import './App.css'

import ClassComponent from './components/ClassComponent/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2>Type something!</h2>
      </header>
      <ClassComponent/>
      <FunctionalComponent/>
    </div>
  );
}

export default App;

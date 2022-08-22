import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist/lists'

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Todolist />
    </div>
  );
}

export default App;

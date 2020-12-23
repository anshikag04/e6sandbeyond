import './App.css';
import Navbar from './Navbar';
import Todo from './Todo';
import Form from './Form'
import Babes from './Babes';

function App() {
  // let x = 'Some Value'
  // let len = x.length
  return (
    <div className="App">
      {/* {x} length is {len} */}
      <Navbar/>
      <Todo todoText='Reply on Instagram Story'/>
      <Form />
      <Babes/>
    </div>
  );
}

export default App;

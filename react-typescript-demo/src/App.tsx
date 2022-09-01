import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';

function App() {

  const personName = {
    first: 'aryan',
    last: 'sharma'
  }


  return (
    <div className="App">
      {/* <Greet name='aryan'/> */}
      <Person name={personName}/>
    </div>
  );
}

export default App;

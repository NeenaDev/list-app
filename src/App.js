import './App.css';
import ListTable from './ListTable';
import ListSelection from './ListSelection';

function App() {
  return (
    <div className="App">
      <div className="list-container">
        <ListSelection />
        <ListTable />
      </div>  
    </div>
  );
}

export default App;

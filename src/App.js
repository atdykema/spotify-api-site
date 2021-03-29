import './App.css';
import Col1Body from './components/Col1Body';
import Col2Body from './components/Col2Body';
import Header from './components/Header';
import Tabbar from './components/Tabbar';
import Toolbar from './components/Toolbar';

function App() {
  return (
    <div className="App">
      <div className="column1">
        <Header />
        <Col1Body /> 
      </div>
      <div className="column2">
       <Toolbar />
       <Tabbar />
       <Col2Body />
      </div>
    </div>
  );
}

export default App;

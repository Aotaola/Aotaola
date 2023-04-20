
import './App.css';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Alejandro Otaola
        </h1>
      </header>
      <div className="App-body">
      <Home/> 
      <Navbar/>
      </div>
      <Footer/>

    </div>
  );
}

export default App;

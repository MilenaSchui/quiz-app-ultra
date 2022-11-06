import './App.css';
import Header from './Components/Header/Header.js';
import Card from './Components/Card/Card.js';
import Navigation from './Components/Navigation/Navigation.js';
import Home from './Components/Home/Home.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Home />
      </main>
          <Navigation />
    </div>
  );
}

export default App;

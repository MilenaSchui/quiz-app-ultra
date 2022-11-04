import './App.css';
import Header from './Components/Header/Header.js';
import Card from './Components/Card/Card.js';
import Navigation from './Components/Navigation/Navigation.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <section>
        <Card />
        <Card />
        <Card />
        </section>
      </main>
      <footer>
        <nav>
          <Navigation />
        </nav>
      </footer>
    </div>
  );
}

export default App;

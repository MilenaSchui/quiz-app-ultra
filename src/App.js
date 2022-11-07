import './App.css';
import Header from './Components/Header/Header.js';
import Card from './Components/Card/Card.js';
import Navigation from './Components/Navigation/Navigation.js';
import Home from './Components/Home/Home.js';
import Form from './Components/Form/Form.js';
import { useState } from 'react';

function App() {
  const [navState, setNavState] = useState("home");
  function switchContent() {
    if (navState === "home"){
      return <Home />
    } else if (navState === "bookmark"){
      return "";
    } else if (navState === "form") {
      return <Form />;
    } else {
      return "";
    }
  }
  
  
  
  
  
  
  
  

  
  return (
    <div className="App">
      <Header/>
      <main>
        {switchContent()}
      </main>
          <Navigation navState={navState} setNavState={setNavState}/>
    </div>
  );
}

export default App;

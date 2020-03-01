import React, {Component} from 'react';
import "./App.css"
import "./Card.css"
import Navbar from "./components/Navbar";
import Main from "./Main";
import About from "./About";
import Contacts from "./Contacts"

class App extends Component {
  render(){return (
  <div id = 'wrapper'>
    <div className="App">

      <Main/>
      <About/>
      <Contacts/>


    </div>
  </div>
  );
}
}
export default App;

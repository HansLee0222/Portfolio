import React, {Component} from 'react';
import{BrowserRouter,Route, Switch} from 'react-router-dom';
import Intro from './intro'
import Homepage from './homepage';

class App extends Component {
  constructor(){
    super()
  }
  render(){
  return (

  <BrowserRouter>
  <React.Fragment>

    <Switch>
      <Route path= "/" exact component={Intro}/>
      <Route path = "/home" exact component = {Homepage}/>
    </Switch>

  </React.Fragment>
  </BrowserRouter>



  );
}
}
export default App;

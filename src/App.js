import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import './App.css';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route path='/shop/hats' component={HatsPage}></Route>
      </Switch>
    </div>

  );
}

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

export default App;
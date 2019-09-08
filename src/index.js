import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'wouter'
import Home from './pages/Home'
import About from './pages/About'

const App = () =>{
    return (
      <Router>
        <Switch>
          <Home path={'/'}/>
          <About path={'/about'} />
        </Switch>
    </Router>
    );
}
  
ReactDOM.render(<App />, document.getElementById('root'));

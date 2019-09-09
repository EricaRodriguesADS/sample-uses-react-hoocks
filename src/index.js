import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'wouter'
import Home from './pages/Home'
import About from './pages/About'
import List from './pages/List'

const App = () =>{
    return (
      <Router>
        <Switch>
          <Home path={'/'}/>
          <About path={'/about'} />
          <List path={'/list'} />
        </Switch>
    </Router>
    );
}
  
ReactDOM.render(<App />, document.getElementById('root'));

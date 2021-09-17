import React from 'react';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import Form from './components/Form';

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/" component={Form} exact/>
        
      </Switch>
      </Router>
    </div>
  );
}

export default App;

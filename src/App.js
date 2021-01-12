import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Result from './components/Result';
import PrivateRoute from './components/PrivateRoute';
import Store from './store';
import './App.css';


const App = () => {
  return (
    <div>
      <Store>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <PrivateRoute path="/result" component={Result} />
          </Switch>
        </Router>
      </Store>
    </div>
  );
}

export default App;

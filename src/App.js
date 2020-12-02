import React from 'react';

import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
    <Router>
      <Switch>
        <Route path="/search">
          <h1>This is a search page</h1>
        </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
    </Router>
      {/* Home (the one with the search on) */}
      
      {/* SearchPage (the result page) */}
    </div>
  );
}

export default App;

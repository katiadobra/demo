import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Table from './pages/Table';
import NotFound from './pages/NotFound';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="demo">
          <Sidebar />
          <div className="content">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/data" component={Table} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

import React from 'react';
import '../../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from '../components/Navbar/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages';
import About from '../pages/about';
import Services from '../pages/services';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/signup' component={Services} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;

import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Services" component={Services} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const App = () => {
    return (
        <Router>
            <div>
               <Switch>

                   <Route path="/login">
                       <h5>Login Page</h5>
                   </Route>

                   <Route path="/checkout">
                       <h5>Checkout Page</h5>
                   </Route>

                   <Route path="/" exact>
                       <Navbar />
					   <Home />
					   <h1>1</h1>
				  </Route>
				</Switch>
            </div>
        </Router>
    );
}

export default App;
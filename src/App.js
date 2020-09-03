import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';

import './App.css';

import Checkout from './containers/Checkout/Checkout';
import Login from './containers/Login/Login';
import SignUp from './containers/SignUp/SignUp';
import Home from './containers/Home/Home';
import { useStateValue} from './context/StateProvider';

const App = () => {
	
	const [ { authUser }, dispatch] = useStateValue();
	useEffect(() => {
		const removeListen = auth.onAuthStateChanged( ( authUser ) => {
			if( authUser ){
				dispatch({
					type: 'AUTH_USER',
					user: authUser
				});
			}
			else {
				dispatch({
					type: 'AUTH_USER',
					user: null
				});
			}
		} );
		
		return(() => {
			removeListen();
		})
	},[]);
	
	return (
        <Router>
            <div>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/signup" component={SignUp} />
					<Route path="/checkout" component={ Checkout } />
					<Route path="/"  component={ Home } />
				</Switch>
            </div>
        </Router>
    );
}

export default App;
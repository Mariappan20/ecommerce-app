import React from 'react';
import { Link } from 'react-router-dom';

import './Login.css';


const Login = ( props ) => {
	
	return (
		<div className="login">
			 <form>
				 <div className="login__title">
				     <Link className="login__link" to="/">E-Shop</Link>
				 </div> 
				<div>
					<input type="text" 
						placeholder="Email address"
						className="login__input"
						value={ props.email}
						onChange={ props.emailChanged }	
						/>
					{ props.emailEmpty ? <p className="error">Enter an Email Address</p> : null  }	
				</div>
				<div>
					<input type="password"
						placeholder="Password"
						className="login__input"
						value={props.password}
						onChange={ props.passwordChanged }
						/>
					{ props.passwordEmpty ? <p className="error">Enter the Password</p> : null  }	
				</div>	
				<button className="login__button" onClick={props.clicked}>Login</button>
				<div className="login__createAccount">
					<small>New to E-Shop ? <Link to="/signup" className="login__createLink">Create an Account</Link></small>
				</div>
			 </form>
			 
			 <div className="login__error">{props.errorMessage}</div>
		</div>
	);
}

export default Login;
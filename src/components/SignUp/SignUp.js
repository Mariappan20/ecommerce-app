import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import './SignUp.css';


const SignUp = (props) => {
	
		return (
		<div className="signup">
			<form>
				<div className="signup__title">
				     <Link className="signup__link" to="/">E-Shop</Link>
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
			    
				<button className="signup__button" onClick={props.clicked}>Sign Up</button>
				<div className="signup__existingAccount">
					<small>Already have an account ? <Link to="/login" className="signup__existingLink">Login</Link></small>
				</div>
			</form>
			 <div className="signup__error">{props.errorMessage}</div>
		</div>
	);
}

export default SignUp;
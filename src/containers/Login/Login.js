import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase'

import Login from '../../components/Login/Login';
import Loader from '../../components/Loader/Loader';


const Auth = ( props ) => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ emailEmpty, setEmailEmpty ] = useState(false);
	const [ passwordEmpty, setPasswordEmpty ] = useState(false);
	const [ errorMessage, setErrorMessage ] = useState('');
	const [loader, setLoader] = useState(false);
	
	const history = useHistory();
	
	
	const emailHandler = ( event ) => {
		let email = event.target.value;
		
		setEmail(email);
		if( !email ) {
			setEmailEmpty( true );
		}
		else {
			setEmailEmpty(false);
		}
	}
		
	const passwordHandler = ( event ) => {
		let password = event.target.value;
		setPassword( password );
		if( !password ) {
			setPasswordEmpty( true );
		}
		else {
			setPasswordEmpty(false);
		}
	}
	
	const loginHandler = ( event ) => {
	
		event.preventDefault();
		if( !email ) {
			setEmailEmpty(true);
		}
		else if( !password ){
			setPasswordEmpty(true);
		}
		else {
			setLoader(true);
			auth.signInWithEmailAndPassword(email, password)
				.then( response => {
				setLoader(false);
				setEmail('');
				setPassword('');	
				
				history.push('/'); 
		 }
		 )
		 .catch( err => {
			 setLoader(false);
			 
			 setEmail('');
			 setPassword('');
			 setErrorMessage(err.message);
			 } )
		}
	
		 
	}
	

	
	return (
		<div>
				{ loader ? <Loader /> : 
				<Login email={email}
				   emailChanged={emailHandler}
				   emailEmpty={emailEmpty}	
				   password={password}
				   passwordChanged={passwordHandler}
				   passwordEmpty={passwordEmpty}
				   clicked={loginHandler}
				   errorMessage={errorMessage}	
					/>
				}
		</div>
	);
}

export default Auth;
import React, { useState } from 'react';
import {  useHistory } from 'react-router-dom';
import { auth } from '../../firebase'


import Signup from '../../components/SignUp/SignUp';
import Loader from '../../components/Loader/Loader';


const SignUp = ( props ) => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ emailEmpty, setEmailEmpty ] = useState(false);
	const [ passwordEmpty, setPasswordEmpty ] = useState(false);
	const [ errorMessage, setErrorMessage ] = useState('');
	const [ loader, setLoader ] = useState('');
	
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
	
	const signUpHandler = ( event ) => {
		event.preventDefault();
		setLoader(true);
		auth.createUserWithEmailAndPassword(email, password)
		 .then( response => {
			 setLoader(false);
				
				history.push('/login'); 
		 }
		 )
		 .catch( err => { 
			setLoader(false);
			
			setErrorMessage(err.message);
			} )
	}
	return (
		<div>
			{ loader ? <Loader /> : 
			<Signup email={email}
				   emailChanged={emailHandler}
				   emailEmpty={emailEmpty}	
				   password={password}
				   passwordChanged={passwordHandler}
				   passwordEmpty={passwordEmpty}
				   clicked={signUpHandler} 
				   errorMessage={errorMessage}	
					/>
			}
		</div>
	);
}

export default SignUp;
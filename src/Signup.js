import React, { useState } from 'react';
import Login from './Login';
import "./login.css";
import { Redirect, Switch,Route } from 'react-router-dom';

function S(props) {

	const [username, setUsername] = useState('');
	const [password1, setPassword1] = useState('');
	const [name, setName] = useState('');


	var auth = JSON.parse(localStorage.getItem('auth'));

	const handleSignup=()=>{

		if(auth===null){
			auth=[{'username':'aaa','password':'aaa','name':'aaa'},];
		}
			
		if(password1){
			
			const same = auth.filter(d=>d.username===username);

			if(same.length===0){
				auth = [...auth,{'username':username,'password':password1,'name':name}];
				localStorage.setItem('auth',JSON.stringify(auth));
				localStorage.setItem('userlogined',username);
				setUsername('');
				setPassword1('');
				setName('');
			}else{
				alert(username+' exist!')
			}
		}
	}

	return (
		<div className='main__div'>
			<div className="login">
				<h1>Sign up!</h1>
			</div>

			<div className="input">
				<input type='text' 
					value={name}
					onChange={e => setName(e.target.value)}
					placeholder='Enter Name' />
				<label>&nbsp;&nbsp;Username&nbsp;&nbsp;</label>
			</div>

			<div className="input">
				<input type='text'
					value={username}
					onChange={e => setUsername(e.target.value)}
					placeholder='Enter Email' />
				<label>&nbsp;&nbsp;Email Address&nbsp;&nbsp;</label>
			</div>
			<div className="input">
				<input type= 'password'
					value={password1}
					onChange={e => setPassword1(e.target.value)}
					placeholder='Enter Password' />
				<label>&nbsp;&nbsp;Password&nbsp;&nbsp;</label>
			</div>



			<div className="input btn">
				<button onClick={handleSignup}>signup</button>
			</div>
			<a href="L">
            <Switch>
                <Route  path="/" component={Login}> Now Log in!</Route>
            </Switch>
            </a>

		</div>
	);
}


export default S;
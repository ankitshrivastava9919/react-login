import React, { useState } from 'react';
import { BrowserRouter, Redirect, Router, Switch } from 'react-router-dom';
import "./login.css"
import {
	Route
} from 'react-router-dom';
import Test from './Dashboard';
import Signup from './Signup';

function L(props) {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	

	var auth = JSON.parse(localStorage.getItem('auth'));

	const handleLogin = () => {

		if (auth === null) {
			alert('no user found!');
		}


		const same = auth.filter(d => d.username === username);

		if (same.length !== 0) {

			if (same[0].password === password) {

				localStorage.setItem('userlogined', username);
				setUsername('');
				setPassword('');
				props.history.push('/t')
				
				
			}
			else {
				alert('wrong password.');
			}
		} else {
			alert(username + 'user not exist!')
		}
	}


	return (
		<div className='main__div'>
			<div className="login">
				<h1>Log in!</h1>
			</div>
			<form  action="" >
				<div className="input">
					<input type='email'
						value={username}
						onChange={e => setUsername(e.target.value)}
						placeholder='Enter email' />
					<label>&nbsp;&nbsp;Email Address&nbsp;&nbsp;</label>
				</div>
				<div className="input mar">
					<input type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						placeholder="Enter password" />
					<label > &nbsp;&nbsp;&nbsp;Password&nbsp;&nbsp;&nbsp;</label>
				</div>
				<div className="forget">
					<div className="rem">
						<input type="checkbox" />
						<label > Remember me</label>
					</div>
					<div>
						<p>Forget Password?</p>
					</div>
				</div>
				<div className="input btn">
					{/* <input type="submit"/> */}
					<button onClick={handleLogin}>login</button>
				</div>
			</form>
			<a href="s">
            <Switch>
                <Route  path="/" component={Signup}> New User? Sign Up!</Route>
            </Switch>
            </a>
		</div>
	);
}

export default L;
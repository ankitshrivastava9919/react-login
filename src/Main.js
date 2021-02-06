import React,{useState, useEffect} from 'react';
import Signup from './Signup';
import Login from './Login';
// import S from './S';
import "./login.css"
import { Redirect, Switch,Route } from 'react-router-dom';
import Dashboard from './Dashboard';

function MainScreen(){
	
	return(
		<div className='main__div'>
			<Switch>
			 	<Route exact path='/' component={Login}/>
			 	<Route path='/s' component={Signup} />
			 	<Route path='/t' component={Dashboard} />

				 <Redirect to="/"/>
				 <Login/>
			 </Switch>
		</div>
	);
}



export default MainScreen;
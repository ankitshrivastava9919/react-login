import React, { Component } from 'react';
import './login.css'
import Signup from "./Signup"
import {
    Route,
    Switch
  } from 'react-router-dom';



export default class Login extends Component {
    render() {
        return (
            <>
        <div className="main__div">
            <div className="login">
                <h1>Log in!</h1>
            </div>
            <form onSubmit={this.onSubmit}>  
                <div className="input">
                    <input id="mainInput"  onBlur={this.onChangeEmail} required type="email" placeholder="Enter Email Address"/>
                    <label>&nbsp;&nbsp;Email Address&nbsp;&nbsp;</label>
                </div>
                <div className="input">
                    <input  onChange={this.onChangePassword} required type="password" placeholder="Enter Password"/>
                    <label > &nbsp;&nbsp;&nbsp;Password&nbsp;&nbsp;&nbsp;</label>
                </div>
                <div className="forget">
                    <div>
                        <input type="checkbox" />
                        <label > Remember me</label>
                    </div>
                    <div>
                        <p>Forget Password?</p>
                    </div>
                </div>
                <div className="input btn">
                    <input type="submit" value="Log in" />
                </div>

            </form>
            
            <a href="signup">
            <Switch>
                <Route  path="/" component={Signup}> New User? Sign Up!</Route>
            </Switch>
            </a>
        </div>
        </>
        )
    }
}
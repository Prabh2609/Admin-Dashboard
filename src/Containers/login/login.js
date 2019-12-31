import React, { Component } from 'react';
import classes from './login.module.css';
import {connect} from 'react-redux'
import { getData } from '../../Utils/Backend';

class Login extends Component{
    state={
        usernameField:false,
        passwordField:false,
        username:true,
        password:true
    }
    
    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.state.usernameField && this.state.passwordField)
        {
            this.props.onUserLoggedIn()
            getData()
            this.props.history.push("/dashboard")
        }    
    }

    onInputChange=(e,name)=>{
        if(name==="username"){
            let Userreg=/([a-zA-Z]+[0-9])/
            let str=e.target.value
            if(Userreg.test(str)){
            e.target.value.length>0?this.setState({usernameField:true}):this.setState({usernameField:false})
            }
            else{
                this.setState({username:false})
            }
        }
        else if(name==="password"){
                let passReg=/([a-zA-Z]+[0-9]+[@#!]+)/
                let passStr=e.target.value
                if(passReg.test(passStr)){
                    e.target.value.length>0?this.setState({passwordField:true}):this.setState({passwordField:false})
                }
                else{
                    this.setState({password:false})
                }
        }
    }

    render(){
    return(
        <form className={classes.loginPage} onSubmit={this.handleSubmit}>
            <div className={classes.loginHeadingContainer}>
                <h2 className={classes.loginHeading}>Welcome to Dashboard,Login</h2>
            </div>
            <div className={classes.formGroup}>
                <label htmlFor="username" className={classes.formLabel}>Username</label>
                <input type="text" name="username" className={classes.formInput} required  placeholder="Username" onInput={(e)=>this.onInputChange(e,'username')}/>
                {this.state.username?null:<div className={classes.usernameValid}>
                    <i className="fas fa-exclamation-triangle"></i>
                    Allowed Characters:A-Z a-z 0-9  and it should not start with a number or character
                    </div>}
            </div>
            <div className={classes.formGroup}>
                <label htmlFor="password" className={classes.formLabel}>Password</label>
                <input type="password" name="password" className={classes.formInput} required onInput={(e)=>this.onInputChange(e,'password')}  placeholder="Password"/>
                {this.state.password?null:<div className={classes.passwordValid}>
                    <i className="fas fa-exclamation-triangle"></i>
                    Allowed Characters:A-Z a-z 0-9 @ # ! and it should not start with a number or character
                </div>}
            </div>
            <div className={classes.formGroup}>        
                    <button type="submit" className={classes.loginButton}  >LOGIN</button>
            </div>
        </form>
    )}
}

const mapDispatcToProps=(dispatch)=>
{
    return{
        onUserLoggedIn:()=>{dispatch({type:'USER_LOGIN'})}
    }
}
export default connect(null,mapDispatcToProps)(Login);
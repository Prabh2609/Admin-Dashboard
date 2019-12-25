import React, { Component } from 'react';
import classes from './login.module.css';
import {connect} from 'react-redux'

class Login extends Component{
    state={
        usernameField:false,
        passwordField:false,
    }
    
    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.state.usernameField && this.state.passwordField)
        {
            this.props.onUserLoggedIn()
            this.props.history.push("/dashboard")
        }    
    }

    onInputChange=(e,name)=>{
        if(name==="username")
            e.target.value.length>0?this.setState({usernameField:true}):this.setState({usernameField:false})
        else if(name==="password")
            e.target.value.length>0?this.setState({passwordField:true}):this.setState({passwordField:false})
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
            </div>
            <div className={classes.formGroup}>
                <label htmlFor="password" className={classes.formLabel}>Password</label>
                <input type="password" name="password" className={classes.formInput} required onInput={(e)=>this.onInputChange(e,'password')}  placeholder="Password"/>
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
import React, { Component } from 'react';
import classes from './navbar.module.css'
import {Link, NavLink} from 'react-router-dom'
import { RouteEndPoints } from '../../Utils/RouteEndPoints';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'

class Navbar extends Component{

    state={showMenu:true}
    onLogoutClicked()
    {
        this.props.onUserLogOut();
        this.props.history.push("/")
    }

    componentDidMount(){
        if(window.innerWidth<=720)
        {
            this.setState({showMenu:false})
        }
    }
    onToggleClick=()=>{
        this.setState(prevState=>({
            showMenu:!prevState.showMenu
        }))
    }
    render(){

    return(
        <nav className={classes.navbar}>{console.log(this.props)}
            <div className={classes.navbarHeading}>
                <h1>PRODUCT ADMIN</h1>
            </div>
            <div className={classes.toggleContainer}>
                <i className="fas fa-bars tm-nav-icon" onClick={()=>this.onToggleClick()}></i>
            </div>
            {this.state.showMenu?<ul className={classes.navList} id="nav">
            <NavLink to = {RouteEndPoints.Dashboard} onClick={(event)=>!this.props.userLoggedInStatus?event.preventDefault():null} activeClassName={classes.active}>
                <li className={classes.navLink}>
                        <i className="fas fa-tachometer-alt"></i>
                        <p>Dashboard</p>
                </li>
            </NavLink>
            <NavLink to= {RouteEndPoints.Product} onClick={(event)=>!this.props.userLoggedInStatus?event.preventDefault():null} activeClassName={classes.active}>
                <li className={classes.navLink}>
                        <i className="fas fa-shopping-cart"></i>
                        <p>Products</p>
                </li>
            </NavLink>
            <NavLink to= {RouteEndPoints.Accounts} onClick={(event)=>!this.props.userLoggedInStatus?event.preventDefault():null} activeClassName={classes.active}>
                <li className={classes.navLink}>
                        <i className="fas fa-user"></i>
                        <p>Accounts</p>
                </li>
            </NavLink>
                <li className={classes.navLink}>
                    <div className={classes.loginStatusContainer}>
                       {this.props.userLoggedInStatus?<p onClick={()=>{this.onLogoutClicked()}}>Admin,<b>Logout</b></p>:null}
                    </div>
                </li>
            </ul>:null}
        </nav>
    )}
}

const mapGlobalStateToProps=(globalState)=>{
    return{
        userLoggedInStatus:globalState.loginReducer.loggedInStatus
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onUserLogOut:()=>{dispatch({type:"USER_LOGOUT"})}
    }
}

export default withRouter(connect(mapGlobalStateToProps,mapDispatchToProps)(Navbar));
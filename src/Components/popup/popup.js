import React, { Component } from 'react'
import classes from './popup.module.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class popup extends Component
{
    state={
        category:'',
    }

    categoryInput=(e)=>
    {
        let value=e.target.value
        this.setState({category:value})
    }
    
    onAddCategory=(e)=>{
        e.preventDefault()
        let object=JSON.parse(localStorage.getItem("Response"))
        console.log(object)
        object.productsPage.categories.push(this.state.category)
        console.log(object)
        localStorage.setItem("Response",JSON.stringify(object))
        this.props.close()
    }

    message=()=>
    {
        switch(this.props.message)
        {
            case "UPDATED":            
                        return(<p className={classes.ContentInfo}>Information Updated Succesfully</p>)
            case "ADD_CATEGORY":
                        return(
                            <form className={classes.addCategoryForm} onSubmit={(e)=>this.onAddCategory(e)}>
                                <div className={classes.formGroup}>
                                    <input type="text" name="newCategory" className={classes.formInput} placeholder="Add New Category" onChange={(e)=>this.categoryInput(e)}/>
                                </div>
                                <div className={classes.formGroup}>
                                    <button>add category</button>
                                </div>
                            </form>
                        )                        
            default:break;

        }
    }
    render(){
    return(
    <div className={classes.popupWrapper}>
        <div className={classes.backdrop}></div>
        <div className={classes.content}>
            <div className={classes.iconContainer}>
                <i className="fas fa-times" onClick={()=>this.props.close()}></i>
            </div>
            {this.message()}
        </div>
    </div>
    )}
}

const mapDispatchToProps=(dispatch)=>{
    return{
        close:()=>{dispatch({type:'CLOSE_POPUP'})}
    }
}

export default withRouter(connect(null,mapDispatchToProps)(popup))
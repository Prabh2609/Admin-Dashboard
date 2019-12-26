import React, { Component } from 'react'
import classes from './productCategory.module.css'
import { connect } from 'react-redux'
import Popup from '../../Components/popup/popup';

class productCategory extends Component{
    state={
        categories:JSON.parse(localStorage.getItem("Response")).productsPage.categories
    }
    onDeleteCategoryClick=(e)=>
    {
        let array=this.state.categories
        let tempObject=JSON.parse(localStorage.getItem("Response"))
        array.splice(e.target.id,1)
        tempObject.productsPage.categories=array
        localStorage.setItem("Response",JSON.stringify(tempObject))
        this.setState({categories:array})
    }
    render(){
        return(
            <div className={classes.productCategoryContainer}>
                {this.props.Popup?<Popup message="ADD_CATEGORY"/>:null}
                <div className={classes.productCategoryContent}>
                    <h2>Product Categories</h2>
                    <div className={classes.productCategoryTableContainer}>
                        <table>
                            <tbody>
                               {
                                   JSON.parse(localStorage.getItem("Response")).productsPage.categories.map((category,pos)=>
                                   {
                                       return(<tr key={pos}>
                                           <td>
                                               {category}
                                           </td>
                                           <td style={{textAlign:"right"}}>
                                                <i id={pos}  className="far fa-trash-alt tm-product-delete-icon" onClick={(e)=>{this.onDeleteCategoryClick(e)}}></i>
                                           </td>
                                       </tr>)
                                   })
                               } 
                            </tbody>
                        </table>
                    </div>
                    <div className={classes.categoryButtonContainer}>
                        <button onClick={()=>this.props.show()}>add new category</button>
                    </div>
                </div>
            </div>
    )}
}

const mapGlobalStateToProps=(globalState)=>
{
    return{
        Popup:globalState.showPopup
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        show:()=>{dispatch({type:'SHOW_POPUP'})}
    }
}


export default connect(mapGlobalStateToProps,mapDispatchToProps)(productCategory)
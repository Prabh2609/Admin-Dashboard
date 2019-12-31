// FOR FUTURE REFERENCE :
//                        HOW DELETE MULTIPLE WORKS?
//                        FIRST ADD ONE VALUE SAY SELECTED IN OBJECT CONTAINING PRODUCT LIST DATA
//                        AND INITIAL VALUE SHOULD BE FALSE 
//                        WHEN USER CLICKS ON CHECKBOX SELECTED VALUE SHOULD TOGGLE
//                        WHEN USER CLICKS ON DELETE MULTIPLE FILES FILTER THE LIST AND PRODUCE NEW LIST
//                        WITH ONLY THOSE VALUES THAT HAVE SELECTED FALSE.AND NOW UPDATE STATE AND LOCAL STORAGE

import React, { Component } from 'react';
import classes from './product.module.css';
import { Link } from 'react-router-dom';
import { RouteEndPoints } from '../../Utils/RouteEndPoints';
import ProductCategory from '../../Components/productCategory/productCategory';


class Product extends Component{

    constructor(props)
    {
        super(props)
        let array=JSON.parse(localStorage.getItem("Response")).productsPage.products
        array.map(item=>{
            item.selected=false
            })
        this.state={
            products:array
        }
    }
    Checked=(e)=>{
        console.log(e.target.value)
        let id=e.target.id
        this.setState(prevState=>({
            products:prevState.products.map(item=>
                    item.id===id?{...item,selected:!item.selected}:item
                )
            
        }))
        console.log(this.state.products[id].selected=!this.state.products[id].selected)
        
    }
    onDeleteSelecetedClick=()=>
    {
        let array=this.state.products.filter(list=>!list.selected)
        let tempObject=JSON.parse(localStorage.getItem("Response"))
        tempObject.productsPage.products=array
        localStorage.setItem("Response",JSON.stringify(tempObject))
        array.map(list=>list.selected=false)
        this.setState({
            products:array})

        
    }
    deleteRowWithId=(id)=>{
        let array=this.state.products
        let tempObject=JSON.parse(localStorage.getItem("Response"))
        array.splice(id,1)
        tempObject.productsPage.products=array
        localStorage.setItem("Response",JSON.stringify(tempObject))
        this.setState({products:array})
    }    
    render(){
        return(
            <div className={classes.productPage}>
                <div className={classes.productContentContainer}>
                    <div className={classes.productContent}>
                        <div className={classes.productTableContainer}>
                            <table>
                                <thead>
                                    <tr>
                                        <th scope="col">&nbsp;</th>
                                        <th scope="col">PRODUCT NAME</th>
                                        <th scope="col">UNIT SOLD</th>
                                        <th scope="col">IN STOCK</th>
                                        <th scope="col">EXPIRY DATE</th>
                                        <th scope="col">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.products.map((products,pos)=>{
                                            return(
                                                <tr key={pos}>{console.log(products)}
                                                    <th scope="row">
                                                        <input id={pos} className={classes.checkbox} type="checkbox" checked={products.selected}  onChange={(e)=>{this.Checked(e)}}></input>
                                                    </th>
                                                    <td>
                                                        {products.name}
                                                    </td>
                                                    <td>
                                                        {products.unitSold}
                                                    </td>
                                                    <td>
                                                        {products.stock}
                                                    </td>
                                                    <td>
                                                        {products.expireDate}
                                                    </td>
                                                    <td>
                                                        <i id={pos}  className="far fa-trash-alt tm-product-delete-icon" onClick={(e)=>{this.deleteRowWithId(e.target.id)}}></i>    
                                                    </td>
                                                </tr>                                            
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>      
                        <div className={classes.buttonContainer}>
                            <Link to={RouteEndPoints.AddNewProduct}>
                            <button>add new product</button>
                            </Link>                            
                            <button onClick={()=>this.onDeleteSelecetedClick()}>delete selected product</button>
                        </div>
                    </div>
                    {/*category  */}<ProductCategory/>
                </div>
            </div>
        )
    }
}


export default Product;
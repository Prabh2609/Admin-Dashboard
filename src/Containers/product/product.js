import React, { Component } from 'react';
import classes from './product.module.css';
import { Link } from 'react-router-dom';
import { RouteEndPoints } from '../../Utils/RouteEndPoints';
import Addproduct from '../addproduct/addproduct';



class Product extends Component{
    
    state={
        products:JSON.parse(localStorage.getItem("Response")).productsPage.products,
        categories:JSON.parse(localStorage.getItem("Response")).productsPage.categories,
        array:[]
    }

    Checked=(e)=>{
        let id=e.target.id
    }
    onDeleteClick=(e)=>{
        let array=this.state.products
        let tempObject=JSON.parse(localStorage.getItem("Response"))
        array.splice(e.target.id,1)
        tempObject.productsPage.products=array
        localStorage.setItem("Response",JSON.stringify(tempObject))
        this.setState({products:array})
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
                                                <tr key={pos}>
                                                    <th scope="row">
                                                        <input id={pos} className={classes.checkbox} type="checkbox" onChange={(e)=>{this.Checked(e)}}></input>
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
                                                        <i id={pos}  className="far fa-trash-alt tm-product-delete-icon" onClick={(e)=>{this.onDeleteClick(e)}}></i>    
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
                            
                            <button>delete selected product</button>
                        </div>
                    </div>
                    <div className={classes.productCategoryContainer}>
                        <div className={classes.productCategoryContent}>
                            <h2>Product categories</h2>
                            <div className={classes.productCategoryTableContainer}>
                                <table>
                                    <tbody>
                                    {
                                        JSON.parse(localStorage.getItem("Response")).productsPage.categories.map((category,pos)=>{
                                            return(
                                                <tr key={pos} style={{textAlign:"left"}}>
                                                    <td style={{paddingLeft:"12px"}}>
                                                        {category}
                                                    </td>
                                                    <td>
                                                        <i  className="far fa-trash-alt tm-product-delete-icon" onClick={(e)=>{this.onDeleteCategoryClick(e)}}></i>
                                                    </td> 
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                            <div className={classes.categoryButtonContainer}>
                                <button>add new category</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;